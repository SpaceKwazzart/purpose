<script lang="ts">
	import { slide, fade } from 'svelte/transition';

	import BoatImage from '$lib/shared/assets/images/bg-boat.png';
	import Icon from '@iconify/svelte';
	import Button from '$lib/shared/ui/Button.svelte';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<header class="mb-6 flex items-center justify-between p-2">
	<div class="text-lg font-semibold">Purpose</div>
	<Button className="px-2 py-1" href="/sign-up" variant="outline">Sign Up</Button>
</header>

<section class="pb-20">
	<h1 in:slide class="mb-10 text-center text-2xl">Focus on your dream - get closer every day</h1>

	<div class="mx-auto max-w-[380px]">
		{#if mounted}
			<div class="mx-auto mb-5 w-fit" in:fade>
				<img class="rounded-lg shadow-lg" src={BoatImage} alt="background" />
			</div>
		{/if}

		<cite class="block text-center"
			>"There is nothing so useless as doing efficiently that which should not be done at all."</cite
		>
		<p class="mr-8 text-right italic">- Peter Drucker</p>
	</div>
</section>

<section
	class="w-full rounded-lg bg-gradient-to-r from-[#76ABAE]/35 via-accent/35 via-40% to-[#76AE7D]/35 py-8 shadow-sm"
>
	<h2 class="mb-8 text-center text-2xl font-semibold">Usage pipeline</h2>
	<ul class="flex flex-col space-y-6 px-4 *:rounded-md *:bg-light *:py-6 *:text-center *:shadow-md">
		<li class="flex flex-col items-center">
			<Icon class="stroke-accent text-accent/60" width={50} icon="typcn:star-full-outline" />
			<h3 class="font-semibold">I. Set the purpose...</h3>
			<p>which you want to achive</p>
		</li>

		<li class="flex flex-col items-center">
			<Icon class="stroke-accent text-accent/60" width={50} icon="typcn:key" />
			<h3 class="font-semibold">II. Identify practices...</h3>
			<p>that will help you reach your goal</p>
		</li>

		<li class="flex flex-col items-center">
			<Icon class="stroke-accent text-accent/60" width={50} icon="pajamas:calendar" />
			<h3 class="font-semibold">III. Day-to-day...</h3>
			<p>note how many time you spent on your practices and other activities</p>
		</li>

		<li class="flex flex-col items-center">
			<Icon class="stroke-accent text-accent/60" width={50} icon="prime:chart-line" />
			<h3 class="font-semibold">IV. Keep track...</h3>
			<p>of your progress over time</p>
		</li>
	</ul>
</section>

<section class="px-8 pt-6">
	<h2 class="mb-4 text-center text-2xl">Tech Stack</h2>
	<div class="mb-4 grid grid-cols-2 *:mx-4 *:my-2">
		<Icon width={150} icon="logos:svelte-kit" />
		<Icon width={120} icon="logos:docker" />
		<Icon width={150} icon="logos:tailwindcss" />
		<Icon width={100} icon="logos:sqlite" />
	</div>
	<p class="pb-5 text-sm italic">
		*This is first try of sveltekit. I so happy with this framework, be aware of new awesome
		web-apps from me :3
	</p>
</section>

<footer class="flex flex-col border bg-dark-alt/5 px-6 py-3">
	<h3 class="mb-2 text-xl font-semibold">Links</h3>
	<Button className="underline justify-start" variant="link" href="#"
		>Portfolio: more products</Button
	>
	<Button className="underline justify-start" variant="link" href="#"
		>Telegram Channgel: Kwazzart</Button
	>
</footer>
