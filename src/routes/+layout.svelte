<script lang="ts">
	import '../app/styles/globals.css';
	import { createUserContext } from '../app/contexts/user';

	export let data;

	createUserContext(data.user);
</script>

<main class="mx-auto max-w-[1400px] border">
	<slot />
</main>
