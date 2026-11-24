# 🇮🇩 Kuis Pahlawan Nasional Indonesia (BHVR + Cloudflare Single Origin)

Aplikasi web kuis edukasi sejarah interaktif bertema **Pahlawan Nasional Indonesia** yang dirancang dengan arsitektur **BHVR (Bun, Hono, Vite, React)** dan dideploy secara **Single Origin** di **Cloudflare Workers (dengan Static Assets Binding)**.

---

## 🏛️ 1. Arsitektur & Tech Stack

| Layer                          | Teknologi                 | Peran & Keunggulan                                                           |
| ------------------------------ | ------------------------- | ---------------------------------------------------------------------------- |
| **Runtime & Workspace**        | **Bun 1.3+**              | Workspace monorepo cepat & efisien                                           |
| **Backend API**                | **Hono v4**               | Berjalan di Cloudflare Workers runtime, lightweight & ultra-fast             |
| **Frontend UI**                | **React 19 + Vite 6**     | Modern SPA dengan Strict Mode dan performa tinggi                            |
| **Styling**                    | **Tailwind CSS v4**       | Estetika editorial arsip sejarah (merah, krem, emas, arang tua)              |
| **Data Contract & Validation** | **Zod + Hono RPC (`hc`)** | End-to-end type safety tanpa code-generation tambahan                        |
| **Code Quality**               | **Biome 2.6+**            | Formatter & Linter super cepat                                               |
| **Deployment**                 | **Cloudflare Workers**    | Single Origin SPA: API `/api/*` + assets binding `env.ASSETS` tanpa isu CORS |

---

## 📁 2. Struktur Monorepo

```text
quiz-nama-tokoh/
├── package.json              # Root Bun workspace & scripts
├── biome.json                # Konfigurasi linter & formatter Biome
├── wrangler.jsonc            # Konfigurasi Cloudflare Single Origin (Worker + Assets)
├── packages/
│   └── shared/               # Kontrak tipe data & skema Zod bersama
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts      # Re-export seluruh skema & dataset
│           ├── schema.ts     # Zod schemas (Hero, QuizQuestion, Answer, QuizResult)
│           └── heroes.ts     # Dataset terkurasi 32 Pahlawan Nasional Indonesia
├── apps/
│   ├── server/               # Hono API Backend (Cloudflare Worker Entrypoint)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts      # Hono app, routing /api/*, & fallback ke env.ASSETS
│   │       ├── client.ts     # Tipe AppType untuk Hono RPC Client
│   │       └── quiz-engine.ts# Smart distractors, pengacakan soal & kalkulasi skor
│   └── client/               # Vite + React Frontend
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts    # Proxy /api ke Worker lokal & output ke dist/
│       └── src/
│           ├── lib/api.ts    # Hono RPC client (hc<AppType>('/'))
│           ├── components/   # Komponen modular (Header, StartScreen, QuizBoard, HeroCard, ResultSummary, HeroEncyclopedia)
│           └── App.tsx       # Root orchestrator & state management
```

---

## 🎖️ 3. Dataset Pahlawan & Quiz Engine

### **Dataset Terkurasi (32 Tokoh dari Sabang sampai Merauke):**

- **Revolusi & Proklamasi:** Ir. Soekarno, Drs. Mohammad Hatta, Jenderal Sudirman, Bung Tomo, I Gusti Ngurah Rai.
- **Perang Daerah & Perlawanan Kolonial:** Pangeran Diponegoro, Cut Nyak Dien, Cut Meutia, Teuku Umar, Kapitan Pattimura, Tuanku Imam Bonjol, Sultan Hasanuddin, Martha Christina Tiahahu.
- **Diplomasi & Integrasi Bangsa:** Sutan Sjahrir, Dr. Johannes Leimena, Dr. Mohammad Natsir, Frans Kaisiepo, Silas Papare.
- **Pendidikan & Pergerakan:** Ki Hajar Dewantara, Raden Dewi Sartika, H.O.S. Tjokroaminoto, K.H. Ahmad Dahlan, Hadratussyaikh K.H. Hasyim Asy'ari, Dr. Sam Ratulangi.
- **Emansipasi Perempuan:** R.A. Kartini, Maria Walanda Maramis, Rasuna Said.
- **Pemikir Bangsa & Bela Negara:** Tan Malaka, Prof. Mr. Mohammad Yamin, Jenderal Ahmad Yani, Laksda John Lie, Marthen Indey.

### **Fitur Quiz Engine:**

1. **Model Soal Bervariasi:**
   - `clue_to_hero`: Tebak tokoh dari 3 petunjuk arsip sejarah bertahap.
   - `quote_to_hero`: Tebak tokoh dari kutipan filosofis/patriotik legendaris.
   - `action_to_hero`: Tebak arsitek peristiwa heroik kunci.
   - `region_to_hero`: Tebak pahlawan berdasarkan wilayah perjuangan.
2. **Smart Distractors:** Pengecoh dipilih secara kontekstual dari pulau atau kategori perjuangan yang relevan agar kuis menantang dan mendidik.
3. **Sistem Penilaian Patriotik:**
   - Poin dasar (100 poin per jawaban tepat).
   - Bonus kecepatan (+5 poin/detik sisa waktu).
   - Multiplier streak combo beruntun (+20 poin per streak).
4. **Gelar Pencapaian:**
   - 👑 _Mahaguru Sejarah Nusantara_ (≥90%)
   - 📜 _Arsiparis Utama Pergerakan_ (≥75%)
   - 🛡️ _Ksatria Literasi Bangsa_ (≥60%)
   - 🔍 _Kader Penelusur Sejarah_ (≥40%)
   - 🌱 _Pelajar Pemula Sejarah_ (<40%)

---

## 🚀 4. Panduan Menjalankan Proyek

### **Prasyarat:**

- Bun 1.2+ atau Node 20+

### **Kompilasi & Type Check:**

```bash
# Kompilasi shared package
tsc -p packages/shared/tsconfig.json

# Kompilasi Hono server
tsc -p apps/server/tsconfig.json

# Type check frontend
tsc -p apps/client/tsconfig.app.json
```

### **Jalankan Development Mode (Single Origin):**

Cukup jalankan satu perintah di root monorepo:

```bash
bun run dev
```

Aplikasi akan aktif di **`http://localhost:5173`** secara **Single Origin**:

- Frontend React 19 SPA disajikan langsung dengan Vite Hot Module Replacement (HMR) instan.
- Seluruh endpoint API (`/api/health`, `/api/heroes`, `/api/quiz/*`) dieksekusi langsung oleh backend Hono melalui in-process development middleware tanpa perlu menjalankan proses terpisah atau konfigurasi proxy manual.

Alternatif pengujian lingkungan Cloudflare Workers:

```bash
# Menjalankan worker & static assets menggunakan Cloudflare Wrangler
bun run dev:wrangler
```

### **Build Produksi:**

```bash
# Build frontend assets ke apps/client/dist
bun run --cwd apps/client build
```

### **Deploy ke Cloudflare Workers:**

```bash
bunx wrangler deploy
```

---

## 🛡️ 5. Cloudflare Single Origin Architecture

Dengan binding `assets` di `wrangler.jsonc`:

```jsonc
{
	"name": "pahlawan-quiz",
	"main": "apps/server/src/index.ts",
	"compatibility_date": "2025-02-14",
	"compatibility_flags": ["nodejs_compat"],
	"assets": {
		"directory": "./apps/client/dist",
		"binding": "ASSETS",
		"not_found_handling": "single-page-application"
	}
}
```
Setiap request ke `/api/*` langsung ditangani oleh Hono API router, sementara rute lainnya dan static assets secara otomatis dilayani oleh Cloudflare Worker via `env.ASSETS.fetch(c.req.raw)` tanpa ada kendala CORS.
