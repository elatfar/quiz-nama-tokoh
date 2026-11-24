import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import { app } from "../server/src/index";

/**
 * Single-Origin Dev Plugin:
 * Mengintegrasikan Hono API backend langsung ke dalam Vite Dev Server.
 * Semua request /api/* ditangani langsung oleh Hono app.fetch() tanpa memerlukan
 * server terpisah atau proxy tambahan, memberikan pengalaman Single Origin sejati saat dev.
 */
function honoSingleOriginPlugin(): Plugin {
	return {
		name: "hono-single-origin",
		configureServer(server) {
			server.middlewares.use(async (req, res, next) => {
				if (!req.url?.startsWith("/api")) {
					return next();
				}

				try {
					const protocol = req.headers["x-forwarded-proto"] || "http";
					const host = req.headers.host || "localhost:5173";
					const url = new URL(req.url, `${protocol}://${host}`);

					const headers = new Headers();
					for (const [key, value] of Object.entries(req.headers)) {
						if (value !== undefined) {
							if (Array.isArray(value)) {
								for (const v of value) headers.append(key, v);
							} else {
								headers.set(key, value);
							}
						}
					}

					let body: Buffer | undefined;
					if (req.method !== "GET" && req.method !== "HEAD") {
						const chunks: Uint8Array[] = [];
						for await (const chunk of req) {
							chunks.push(
								typeof chunk === "string" ? Buffer.from(chunk) : chunk,
							);
						}
						if (chunks.length > 0) {
							body = Buffer.concat(chunks);
						}
					}

					const webReq = new Request(url.toString(), {
						method: req.method,
						headers,
						body: body && body.length > 0 ? body : undefined,
					});

					const webRes = await app.fetch(webReq);

					res.statusCode = webRes.status;
					res.statusMessage = webRes.statusText;
					webRes.headers.forEach((val, key) => {
						res.setHeader(key, val);
					});

					const arrayBuffer = await webRes.arrayBuffer();
					res.end(Buffer.from(arrayBuffer));
				} catch (err) {
					console.error("[Hono Dev Server Error]:", err);
					res.statusCode = 500;
					res.end("Internal Server Error in Hono Dev Middleware");
				}
			});
		},
	};
}

export default defineConfig({
	plugins: [react(), tailwindcss(), honoSingleOriginPlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 5173,
		host: true,
	},
	build: {
		outDir: "dist",
		emptyOutDir: true,
	},
});
