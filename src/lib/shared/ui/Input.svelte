<script lang="ts">
	type Input = 'text' | 'password' | 'email' | 'number';

	export let required = false;
	export let type: Input = 'text';
	export let placeholder = '';
	export let value = '';
	export let name = '';
</script>

<input
	class="border p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
	bind:value
	{name}
	{required}
	{placeholder}
	{...{ type }}
/>
