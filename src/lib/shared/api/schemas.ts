import z from 'zod';

export const userSchema = z.object({
	id: z.number().int().positive().optional(),
	email: z.string().email(),
	passwordHash: z.string().optional(),
	emailVerified: z.boolean().default(false),
	registerDate: z.string().transform((str) => new Date(str)),
	lastInteractionDate: z
		.string()
		.optional()
		.transform((str) => (str ? new Date(str) : null)),
	displayName: z.string().nullable().optional(),
	photoUrl: z.string().nullable().optional()
});
