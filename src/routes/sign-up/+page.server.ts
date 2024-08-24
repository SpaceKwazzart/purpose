import { fail } from '@sveltejs/kit';
import type { z } from 'zod';

import { getUserByEmail } from '$lib/entities/user';
import type { userSchema } from '$lib/shared/api/schemas.js';

export const actions = {
	default: async ({ locals, request }) => {
		const db = locals.db;

		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password');

		if (!email) return fail(400, { message: 'Need to pass email adress' });
		if (!password) return fail(400, { message: 'Need to pass password' });

		let user: z.infer<typeof userSchema> | null;
		try {
			user = await getUserByEmail(db, email);
			console.log('FROM ACTION: ', user);
		} catch (error) {
			console.log(error);
			return fail(400, { message: 'Unexpected error' });
		}
		if (user) return fail(400, { message: 'User with this email already exists' });
	}
};
