<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import '../app/styles/globals.css';

	export let data: any;

	const user = writable();
	user.set(data.user);
	setContext('user', user);
</script>

<main>
	<slot />
</main>
