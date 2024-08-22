<script lang="ts">
	import Button from '$lib/shared/ui/Button.svelte';
</script>

<header>
	<div>Purpose</div>
	<Button color="primary">Log In</Button>
</header>

<section></section>

<section></section>

<section></section>

<footer></footer>

<style>
	header {
		padding: var(--space-sm) var(--space-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header > div {
		font-weight: var(--font-weight-semibold);
	}
</style>
