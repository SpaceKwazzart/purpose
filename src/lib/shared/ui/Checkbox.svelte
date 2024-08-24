<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Checkbox, Label } from 'bits-ui';

	export let checked = false;
	export let id = 'id';
	export let ariaLabelledby = 'label';
</script>

<div class="flex items-center space-x-1">
	<Checkbox.Root
		bind:checked
		{id}
		aria-labelledby={ariaLabelledby}
		class={`data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40 peer inline-flex size-4 items-center justify-center rounded-sm border transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark active:scale-95`}
	>
		<Checkbox.Indicator
			let:isChecked
			let:isIndeterminate
			class="text-background inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
		>
			{#if isChecked}
				<Icon icon="ci:check" />
			{:else if isIndeterminate}
				<Icon icon="typcn:minus" />
			{/if}
		</Checkbox.Indicator>
	</Checkbox.Root>
	<Label.Root
		id="label"
		for={id}
		class="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		<slot>Accept</slot>
	</Label.Root>
</div>
