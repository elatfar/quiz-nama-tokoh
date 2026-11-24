import { hc } from "hono/client";
import type { AppType } from "server";

// Inisialisasi client Hono RPC Single Origin
// Di dev maupun prod (Single Origin Cloudflare Workers), prefix path adalah /
export const client = hc<AppType>("/");

// Helper wrapper untuk endpoint API
export const api = {
	async getHealth() {
		const res = await client.api.health.$get();
		if (!res.ok) throw new Error("Gagal memeriksa status API");
		return res.json();
	},

	async getHeroes(params?: {
		category?: string;
		island?: string;
		search?: string;
	}) {
		const query: Record<string, string> = {};
		if (params?.category) query.category = params.category;
		if (params?.island) query.island = params.island;
		if (params?.search) query.search = params.search;

		const res = await client.api.heroes.$get({ query });
		if (!res.ok) throw new Error("Gagal memuat daftar pahlawan");
		return res.json();
	},

	async getHeroById(id: string) {
		const res = await client.api.heroes[":id"].$get({ param: { id } });
		if (!res.ok) throw new Error("Pahlawan tidak ditemukan");
		return res.json();
	},

	async startQuiz(data: {
		mode?: "kilat" | "standar" | "maraton";
		category?: string;
		questionCount?: number;
	}) {
		const res = await client.api.quiz.new.$post({ json: data });
		if (!res.ok) throw new Error("Gagal memulai sesi kuis");
		return res.json();
	},

	async submitQuiz(data: {
		sessionId: string;
		answers: Array<{
			questionId: string;
			selectedHeroId: string;
			timeSpentSeconds: number;
		}>;
	}) {
		const res = await client.api.quiz.submit.$post({ json: data });
		if (!res.ok) throw new Error("Gagal mengirimkan jawaban kuis");
		return res.json();
	},
};
