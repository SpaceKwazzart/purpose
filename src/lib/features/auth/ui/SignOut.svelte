<script lang="ts">
	import type { z } from 'zod';
	import { userSchema } from '$lib/shared/api/schemas';
	import Button from '$lib/shared/ui/Button.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const user = getContext<Writable<z.infer<typeof userSchema> | null>>('user');

	const onSignOut = () => {
		fetch('/api/sign-out', { method: 'POST' });
		$user = null;
	};
</script>

<Button className="px-3" on:click={onSignOut} color="danger" variant="outline">Sign Out</Button>
