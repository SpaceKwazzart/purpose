import sqlite3 from 'sqlite3';

export function getDatabaseConection() {
	return new sqlite3.Database('production.db', (err) => {
		if (err) {
			throw err;
		}
	});
}
