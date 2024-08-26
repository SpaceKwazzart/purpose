import z from 'zod';

export const userSchema = z.object({
	id: z.number().int().positive().optional(),
	email: z.string().email(),
	passwordHash: z.string().optional(),
	emailVerified: z.number().nonnegative().max(1),
	registerDate: z.string().transform((str) => new Date(str)),
	lastInteractionDate: z
		.string()
		.optional()
		.transform((str) => (str ? new Date(str) : null)),
	displayName: z.string().nullable().optional(),
	photoUrl: z.string().nullable().optional()
});

export const purposeSchema = z.object({
	id: z.number().int().positive().optional(),
	userId: z.number().int().positive().optional(),
	name: z.string(),
	dateCreated: z.string().transform((str) => new Date(str)),
	dateUpdate: z.string().transform((str) => new Date(str)),
	hours: z.number().nonnegative()
});

export const timeBucketSchema = z.object({
	id: z.number().int().positive().optional(),
	purposeId: z.number().int().positive().optional(),
	name: z.string(),
	staticHours: z.number().nonnegative(),
	dinamicHours: z.number().nonnegative()
});

export const timePointSchema = z.object({
	id: z.number().int().positive().optional(),
	timeBucketId: z.number().int().positive().optional(),
	skipped: z.number().nonnegative().max(1),
	date: z.string().transform((str) => new Date(str))
});

export const timeBucketPointSchema = z.object({
	timeBucketId: z.number().int().positive().optional(),
	timePointId: z.number().int().positive().optional(),
	hours: z.number().nonnegative()
});
