<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';
	import { Button } from 'bits-ui';
	import { mrg } from '../lib/mrg';
	import type { ClassValue } from 'clsx';

	let clicked = false;

	const buttonVars = cva(
		'active:scale-95 transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50',
		{
			variants: {
				color: {
					default: 'border bg-dark-alt/50 border-dark hover:text-dark/90 hover:bg-dark-alt/60',
					accent:
						'border bg-accent text-accent border-accent hover:text-accent/90 hover:bg-accent/90',
					danger:
						'border bg-danger text-danger border-danger hover:text-danger/90 hover:bg-danger/90'
				},
				variant: {
					default: 'text-dark border border-dark-alt hover:text-dark/90',
					outline: 'transition bg-dark/0 hover:bg-dark/0',
					ghost: 'bg-dark/0 hover:text-dark/90',
					link: 'bg-black/0 hover:bg-black/0 border-none hover:underline',
					light: 'bg-black/0 hover:bg-black/0 border-none'
				},
				size: {
					default: 'h-9 px-4 py-2',
					sm: 'h-8 rounded-md px-3 text-xs',
					lg: 'h-10 rounded-md px-8',
					icon: 'h-9 w-9'
				}
			},
			defaultVariants: {
				color: 'default',
				variant: 'default',
				size: 'default'
			}
		}
	);

	type ButtonVars = VariantProps<typeof buttonVars>;

	const handleClicked = () => {
		clicked = true;
		setTimeout(() => {
			clicked = false;
		}, 300);
	};

	export let variant: ButtonVars['variant'] = 'default';
	export let color: ButtonVars['color'] = 'default';
	export let size: ButtonVars['size'] = 'default';
	export let disabled = false;
	export let className: ClassValue[] | string = '';
</script>

<Button.Root
	on:click
	on:click={handleClicked}
	{disabled}
	class={mrg(buttonVars({ color, variant, size, className }))}
>
	<slot>Commit action</slot>
</Button.Root>
