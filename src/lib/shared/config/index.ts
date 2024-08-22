import { NODE_ENV } from '$env/static/private';

export const DB_NAME =
	NODE_ENV === 'development'
		? 'data/development.db'
		: NODE_ENV === 'production'
			? 'data/production.db'
			: 'data/test.db';
