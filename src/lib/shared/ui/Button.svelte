<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export const onChange: MouseEventHandler<HTMLButtonElement> = () => undefined;
	export const variant: string = 'default';
</script>

<button on:click={onChange}>
	<slot>Click</slot>
</button>

<style>
	button {
		color: var(--primary);
	}
</style>
