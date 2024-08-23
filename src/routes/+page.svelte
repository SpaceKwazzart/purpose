<script lang="ts">
	import PhoneImage from '$lib/assets/icons/phone-frame.png';
	import Icon from '@iconify/svelte';
	import Button from '$lib/shared/ui/Button.svelte';
</script>

<header class="p-2 items-center flex justify-between">
	<div class="text-lg font-semibold">Purpose</div>
	<Button on:click={() => console.log('clicked')} variant="outline">Log In</Button>
</header>

<section>
	<h1 class="text-center text-2xl">Focus on your dream - get closer every day</h1>

	<div>
		<img src={PhoneImage} alt="background" />
		<div class="">
			<h2>Hello</h2>
			<div></div>
		</div>
	</div>

	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</section>

<section></section>

<section></section>

<footer></footer>
