import type { z } from 'zod';

import { userSchema } from '$lib/shared/api/schemas';
import { verifyJwt } from './api/auth/index.js';

export async function load({ cookies }) {
	const token = cookies.get('token');

	let user: z.infer<typeof userSchema> | null;
	if (token) {
		// TODO: verify token
		const data = verifyJwt(token);
		user = userSchema.parse(data);
	} else {
		user = null;
	}

	return {
		user
	};
}
