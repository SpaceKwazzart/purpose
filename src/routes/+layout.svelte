<script lang="ts">
	import '../app/styles/globals.css';
	import { createUserContext } from '../app/contexts/user';
	import Button from '$lib/shared/ui/Button.svelte';
	import { userSchema } from '$lib/shared/api/schemas';
	import { SignOut } from '$lib/features/auth';
	import { getUserContext } from '$lib/entities/user/model';

	export let data;

	createUserContext(data.user);

	const user = getUserContext();
</script>

<header class="mb-6 flex items-center justify-between p-2">
	<Button href="/" variant="light" className="text-lg font-semibold">Purpose</Button>

	{#if $user}
		<SignOut />
		<Button className="px-2 py-1" href="/sign-up" variant="outline">Profile</Button>
	{:else}
		<Button className="px-2 py-1" href="/sign-up" variant="outline">Sign Up</Button>
	{/if}
</header>

<main class="mx-auto max-w-[1400px]">
	<slot />
</main>
