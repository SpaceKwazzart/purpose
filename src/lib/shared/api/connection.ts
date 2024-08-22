import sqlite3 from 'sqlite3';

import { DB_NAME } from '../config';

export function getDatabaseConection() {
	return new sqlite3.Database(DB_NAME, (err) => {
		if (err) {
			throw err;
		}
	});
}
