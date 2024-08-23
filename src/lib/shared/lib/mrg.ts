import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function mrg(...args: Parameters<typeof clsx>) {
	return twMerge(clsx(...args));
}
