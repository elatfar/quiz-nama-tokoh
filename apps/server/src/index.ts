import { Hono } from "hono";
import { cors } from "hono/cors";
import { HEROES, QuizSessionInitSchema, SubmitQuizPayloadSchema } from "shared";
import { createQuizSession, evaluateQuizSession } from "./quiz-engine.js";

// Cloudflare Workers Environment Bindings
export type Bindings = {
	ASSETS?: {
		fetch: (request: Request | string, init?: RequestInit) => Promise<Response>;
	};
};

export const app = new Hono<{ Bindings: Bindings }>();

// Middleware CORS jika dibutuhkan saat development terpisah
app.use(
	"/api/*",
	cors({
		origin: "*",
		allowMethods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
	}),
);

// Grouping API Routes
const apiRoutes = app
	.basePath("/api")
	.get("/health", (c) => {
		return c.json({
			status: "ok",
			service: "Kuis Pahlawan Nasional API",
			heroesCount: HEROES.length,
			timestamp: new Date().toISOString(),
		});
	})
	// Ambil daftar seluruh tokoh pahlawan atau filter
	.get("/heroes", (c) => {
		const category = c.req.query("category");
		const island = c.req.query("island");
		const search = c.req.query("search")?.toLowerCase();

		let list = [...HEROES];

		if (category && category !== "all") {
			list = list.filter((h) => h.category === category);
		}

		if (island && island !== "all") {
			list = list.filter((h) => h.island === island);
		}

		if (search) {
			list = list.filter(
				(h) =>
					h.name.toLowerCase().includes(search) ||
					h.originRegion.toLowerCase().includes(search) ||
					h.significanceTag.toLowerCase().includes(search) ||
					h.knownAs?.toLowerCase().includes(search),
			);
		}

		return c.json({
			success: true,
			total: list.length,
			data: list,
		});
	})
	// Ambil detail pahlawan berdasarkan ID
	.get("/heroes/:id", (c) => {
		const id = c.req.param("id");
		const hero = HEROES.find((h) => h.id === id);

		if (!hero) {
			return c.json(
				{
					success: false,
					message: `Pahlawan dengan ID '${id}' tidak ditemukan.`,
				},
				404,
			);
		}

		return c.json({
			success: true,
			data: hero,
		});
	})
	// Mulai sesi kuis baru
	.post("/quiz/new", async (c) => {
		let body: unknown = {};
		try {
			body = await c.req.json();
		} catch {
			body = {};
		}

		const parsed = QuizSessionInitSchema.safeParse(body);
		const initData = parsed.success
			? parsed.data
			: { mode: "standar" as const, questionCount: 10 };

		const session = createQuizSession(initData);

		return c.json({
			success: true,
			data: session,
		});
	})
	// Submit dan kalkulasi skor kuis
	.post("/quiz/submit", async (c) => {
		let body: unknown = {};
		try {
			body = await c.req.json();
		} catch {
			return c.json(
				{
					success: false,
					message: "Format payload jawaban tidak valid.",
				},
				400,
			);
		}

		const parsed = SubmitQuizPayloadSchema.safeParse(body);
		if (!parsed.success) {
			return c.json(
				{
					success: false,
					message: "Data jawaban kuis tidak sesuai skema validasi.",
					errors: parsed.error.issues,
				},
				400,
			);
		}

		const result = evaluateQuizSession(parsed.data);

		return c.json({
			success: true,
			data: result,
		});
	});

// Fallback ke Cloudflare Workers ASSETS (Single Origin SPA)
app.all("*", (c) => {
	if (c.env?.ASSETS) {
		return c.env.ASSETS.fetch(c.req.raw);
	}
	return c.text(
		"Kuis Pahlawan API running. Di mode lokal, akses frontend Vite di port 5173 atau gunakan wrangler dev.",
		200,
	);
});

export type AppType = typeof apiRoutes;
export default app;
