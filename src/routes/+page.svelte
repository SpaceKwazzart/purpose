<script lang="ts">
	import BoatImage from '$lib/shared/assets/images/bg-boat.png';
	import Icon from '@iconify/svelte';
	import Button from '$lib/shared/ui/Button.svelte';
</script>

<section class="pb-20">
	<h1 class="mb-10 text-center text-2xl">Focus on your dream - get closer every day</h1>

	<div class="mx-auto max-w-[380px]">
		<div class="mx-auto mb-5 w-fit">
			<img class="rounded-lg shadow-lg" src={BoatImage} alt="background" />
		</div>

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
			<Icon class="stroke-accent text-accent/30" width={50} icon="typcn:star-full-outline" />
			<h3 class="font-semibold">I. Set the purpose...</h3>
			<p>which you want to achive</p>
		</li>

		<li class="flex flex-col items-center">
			<Icon class="stroke-accent text-accent/30" width={50} icon="typcn:key" />
			<h3 class="font-semibold">II. Identify practices...</h3>
			<p>that will help you reach your goal</p>
		</li>

		<li class="flex flex-col items-center">
			<Icon class="stroke-accent text-accent/30" width={50} icon="pajamas:calendar" />
			<h3 class="font-semibold">III. Day-to-day...</h3>
			<p>note how many time you spent on your practices and other activities</p>
		</li>

		<li class="flex flex-col items-center">
			<Icon class="stroke-accent text-accent/30" width={50} icon="prime:chart-line" />
			<h3 class="font-semibold">IV. Keep track...</h3>
			<p>of your progress over time</p>
		</li>
	</ul>
</section>

<section class="px-8 py-10">
	<h2 class="mb-4 pt-2 text-center text-2xl">Tech Stack</h2>
	<div class="mb-4 grid grid-cols-2 *:mx-auto *:my-4">
		<Icon width={150} icon="logos:svelte-kit" />
		<Icon width={120} icon="logos:docker" />
		<Icon width={150} icon="logos:tailwindcss" />
		<Icon width={100} icon="logos:sqlite" />
	</div>
	<p class="pb-5 text-sm italic">
		*This is my first attempt at using sveltekit. I'm very happy with this framework, stay tuned for
		more awesome new web applications from me :3
	</p>

	<div class="flex justify-center pt-4">
		<Button color="accent" className="px-4 py-2" href="/sign-up" variant="outline"
			>Start Achive</Button
		>
	</div>
</section>

<footer class="flex flex-col border px-6 pb-20 pt-10">
	<h3 class="mb-2 text-xl font-semibold">Links</h3>
	<Button className="underline justify-start" variant="link" href="#"
		>Portfolio: more products</Button
	>
	<Button className="underline justify-start" variant="link" href="#"
		>Telegram Channgel: Kwazzart</Button
	>
</footer>
