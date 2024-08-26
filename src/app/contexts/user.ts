import type { userSchema } from '$lib/shared/api/schemas';
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import z from 'zod';

export function createUserContext(user: z.infer<typeof userSchema> | null) {
	const userContext = writable<typeof user | null>();
	userContext.set(user);
	setContext('user', userContext);
}
