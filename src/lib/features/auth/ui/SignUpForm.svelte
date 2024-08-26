<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';

	import Button from '$lib/shared/ui/Button.svelte';
	import Checkbox from '$lib/shared/ui/Checkbox.svelte';
	import Input from '$lib/shared/ui/Input.svelte';
	import { mrg } from '$lib/shared/lib/mrg';
	import { getUserContext } from '$lib/entities/user/model';
	import type { Z } from 'vitest/dist/chunks/reporters.C_zwCd4j.js';

	export let form;

	const user = getUserContext();

	let email = '';
	let password = '';
	let name = '';
	let remember = false;

	let submitColor: 'default' | 'accent' | 'danger' | null | undefined;

	$: readyToSubmit = email.trim() !== '' && password.trim() !== '';
	$: submitColor = readyToSubmit ? 'accent' : 'default';

	onMount(() => {
		const { email: oldEmail } = JSON.parse(
			localStorage.getItem('remembered-credentials') || '{"email": ""}'
		);
		email = oldEmail;
	});
</script>

<form
	use:enhance={() => {
		return async ({ result, update }) => {
			if (result.type === 'success') {
				const userData = result.data.success.user;
				$user = userData;
				goto('/');
			} else {
				update();
			}
		};
	}}
	class="mx-auto mt-8 flex max-w-[330px] flex-col px-8 py-4 shadow"
	method="post"
>
	<h1 class="mb-6 text-center text-2xl">Create an account</h1>

	{#if form}
		<p class="text-sm text-danger">{form?.message}</p>
	{/if}

	<div class="mb-2 space-y-2 *:w-full">
		<Input
			bind:value={email}
			required
			name="email"
			type="email"
			placeholder="enter email adress*"
		/>
		<Input
			bind:value={password}
			required
			name="password"
			type="password"
			placeholder="enter password*"
		/>
		<Input name="name" bind:value={name} type="text" placeholder="enter your name" />
	</div>

	<div class="mb-10 flex items-center space-x-4">
		<Checkbox bind:checked={remember}>Remember?</Checkbox>
		<Button
			type="button"
			on:click={() => {
				localStorage.removeItem('remembered-credentials');
				email = '';
				password = '';
				name = '';
			}}
			className="rounded-none max-w-[4rem]"
			color="danger"
			variant="light"
		>
			<div class="inline-flex items-center text-xs">
				<p>{'(Forget me!'}</p>
				<Icon class="rotate-45" icon="typcn:plus" />
				<p>{')'}</p>
			</div>
		</Button>
	</div>

	<Button
		on:click={() => {
			if (remember) localStorage.setItem('remembered-credentials', JSON.stringify({ email }));
		}}
		className={mrg('mx-auto max-w-[200px] py-2 border mb-4 px-8', {
			'text-dark/40 border-dark/40': !readyToSubmit
		})}
		color={submitColor}
		variant="outline">Create account</Button
	>

	<div class="flex flex-col items-center justify-center space-y-2">
		<Button type="button" className="underline py-0 text-xs w-fit" variant="link"
			>Forget password?</Button
		>
		<Button className="text-xs w-fit" type="button" href="/sign-in" variant="light"
			>Already have account?
			<span class="ml-1 py-0 underline">Log In!</span>
		</Button>
	</div>
</form>
