import sqlite3 from 'sqlite3';

import { NODE_ENV } from '$env/static/private';

export const DB_NAME =
	NODE_ENV === 'development'
		? 'data/development.db'
		: NODE_ENV === 'production'
			? 'data/production.db'
			: 'data/test.db';

export function getDatabaseConection() {
	return new sqlite3.Database(DB_NAME, (err) => {
		if (err) {
			throw err;
		}
	});
}
