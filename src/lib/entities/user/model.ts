import type { z } from 'zod';
import type { userSchema } from '$lib/shared/api/schemas';
import { getContext } from 'svelte';
import type { Writable } from 'svelte/store';

export function getUserContext() {
	return getContext<Writable<z.infer<typeof userSchema> | null>>('user');
}
