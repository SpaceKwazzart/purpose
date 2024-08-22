import { NODE_ENV } from '$env/static/private';

export const DATABASE_PATH = '../../../../../production.db';

export const DB_NAME =
	NODE_ENV === 'development'
		? 'development.db'
		: NODE_ENV === 'production'
			? 'production.db'
			: 'test.db';
