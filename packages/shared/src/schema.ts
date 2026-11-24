import { z } from "zod";

export const HeroCategorySchema = z.enum([
	"perintis",
	"pergerakan_nasional",
	"pendidikan",
	"perang_daerah",
	"revolusi_kemerdekaan",
	"diplomasi",
	"emansipasi",
	"bela_negara",
	"pemikir_bangsa",
]);

export type HeroCategory = z.infer<typeof HeroCategorySchema>;

export const HeroSchema = z.object({
	id: z.string(),
	name: z.string(),
	knownAs: z.string().optional(),
	title: z.string(),
	birthYear: z.number().nullable(),
	deathYear: z.number().nullable(),
	birthPlace: z.string(),
	originRegion: z.string(),
	island: z.string(),
	category: HeroCategorySchema,
	period: z.string(),
	summary: z.string(),
	clues: z.array(z.string()).min(3),
	trivia: z.string(),
	famousQuote: z.string().optional(),
	keyAction: z.string(),
	avatarIcon: z.string(),
	significanceTag: z.string(),
});

export type Hero = z.infer<typeof HeroSchema>;

export const QuizDifficultySchema = z.enum(["mudah", "sedang", "sulit"]);
export type QuizDifficulty = z.infer<typeof QuizDifficultySchema>;

export const QuizModeSchema = z.enum(["kilat", "standar", "maraton"]);
export type QuizMode = z.infer<typeof QuizModeSchema>;

export const QuizQuestionTypeSchema = z.enum([
	"clue_to_hero",
	"quote_to_hero",
	"action_to_hero",
	"region_to_hero",
]);
export type QuizQuestionType = z.infer<typeof QuizQuestionTypeSchema>;

export const QuizOptionSchema = z.object({
	id: z.string(),
	text: z.string(),
	subtext: z.string().optional(),
});
export type QuizOption = z.infer<typeof QuizOptionSchema>;

export const QuizQuestionSchema = z.object({
	id: z.string(),
	number: z.number(),
	type: QuizQuestionTypeSchema,
	prompt: z.string(),
	clues: z.array(z.string()),
	quote: z.string().optional(),
	options: z.array(QuizOptionSchema),
	category: HeroCategorySchema,
	region: z.string(),
	timeLimitSeconds: z.number(),
});
export type QuizQuestion = z.infer<typeof QuizQuestionSchema>;

export const QuizSessionInitSchema = z.object({
	mode: QuizModeSchema.default("standar"),
	category: z.string().optional(),
	questionCount: z.number().min(5).max(30).default(10),
});
export type QuizSessionInit = z.infer<typeof QuizSessionInitSchema>;

export const QuizSessionSchema = z.object({
	sessionId: z.string(),
	mode: QuizModeSchema,
	totalQuestions: z.number(),
	questions: z.array(QuizQuestionSchema),
	createdAt: z.string(),
});
export type QuizSession = z.infer<typeof QuizSessionSchema>;

export const AnswerItemSchema = z.object({
	questionId: z.string(),
	selectedHeroId: z.string(),
	timeSpentSeconds: z.number().min(0),
});
export type AnswerItem = z.infer<typeof AnswerItemSchema>;

export const SubmitQuizPayloadSchema = z.object({
	sessionId: z.string(),
	answers: z.array(AnswerItemSchema),
});
export type SubmitQuizPayload = z.infer<typeof SubmitQuizPayloadSchema>;

export const QuestionReviewSchema = z.object({
	questionId: z.string(),
	number: z.number(),
	prompt: z.string(),
	isCorrect: z.boolean(),
	selectedHeroId: z.string(),
	selectedHeroName: z.string(),
	correctHeroId: z.string(),
	correctHeroName: z.string(),
	correctHeroTitle: z.string(),
	trivia: z.string(),
	keyAction: z.string(),
	famousQuote: z.string().optional(),
	pointsEarned: z.number(),
});
export type QuestionReview = z.infer<typeof QuestionReviewSchema>;

export const ScoreRankSchema = z.object({
	title: z.string(),
	badge: z.string(),
	description: z.string(),
});
export type ScoreRank = z.infer<typeof ScoreRankSchema>;

export const QuizResultSchema = z.object({
	sessionId: z.string(),
	totalQuestions: z.number(),
	correctAnswers: z.number(),
	accuracyPercentage: z.number(),
	baseScore: z.number(),
	speedBonus: z.number(),
	streakBonus: z.number(),
	finalScore: z.number(),
	totalTimeSeconds: z.number(),
	rank: ScoreRankSchema,
	reviews: z.array(QuestionReviewSchema),
});
export type QuizResult = z.infer<typeof QuizResultSchema>;

export const ApiResponseSchema = z.object({
	success: z.boolean(),
	message: z.string().optional(),
});
export type ApiResponse = z.infer<typeof ApiResponseSchema>;
