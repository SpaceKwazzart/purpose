import type { Database } from 'sqlite3';

export function runQuery(db: Database, query: string, parameters: unknown[] = []) {
	return new Promise((resolve, reject) => {
		db.get(query, parameters, (err, row) => {
			if (err) reject(err);
			resolve(row || null);
		});
	});
}
