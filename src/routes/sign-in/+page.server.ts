import { fail } from '@sveltejs/kit';
import type { z } from 'zod';

import { getUserByEmail } from '$lib/entities/user';
import type { userSchema } from '$lib/shared/api/schemas.js';
import { generateJwt } from '../api/auth';

export const actions = {
	default: async ({ locals, request, cookies }) => {
		const db = locals.db;

		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!email) return fail(400, { message: 'Need to pass email adress' });
		if (!password) return fail(400, { message: 'Need to pass password' });

		let user: z.infer<typeof userSchema> | null;
		try {
			user = await getUserByEmail(db, email);
		} catch (error) {
			console.error(error);
			return fail(400, { message: 'Unexpected error' });
		}
		if (!user) return fail(400, { message: 'User does not exist' });

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { passwordHash, ...jwtData } = user;
		const jwt = generateJwt(jwtData);
		cookies.set('token', jwt, { path: '/' });

		return {
			success: {
				user: jwtData
			}
		};
	}
};
