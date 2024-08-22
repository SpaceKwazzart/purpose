<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	type Variants = 'default' | 'outline' | 'light';
	type Colors = '' | 'primary' | 'danger';

	export const onClick: MouseEventHandler<HTMLButtonElement> = () => undefined;
	export let variant: Variants = 'default';
	export let color: Colors = '';
	export let disabled = false;
</script>

<button class:disabled class={`${variant} ${color}`} on:click={onClick}>
	<slot>Ok</slot>
</button>

<style>
	button {
		font-size: var(--text-sm);
		background-color: rgba(0, 0, 0, 0);
		padding: var(--space-sm) var(--space-md);
		cursor: pointer;
		border-radius: var(--radius);
	}

	.disabled {
		opacity: 50%;
	}

	.danger {
		background-color: var(--danger);
		color: var(--danger);
		border-color: var(--danger);
	}

	.primary {
		background-color: var(--primary);
		color: var(--primary);
		border-color: var(--primary);
	}

	/* Variants */
	.default {
		color: var(--text-color);
	}

	.outline {
		background-color: var(--bg-light);
	}

	.light {
		border: none;
		background-color: none;
	}
</style>
