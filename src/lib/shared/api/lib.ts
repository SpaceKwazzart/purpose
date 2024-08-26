import type { Statement } from 'sqlite3';

export function runQuery(statement: Statement, parameters: unknown[] = []): Promise<number> {
	return new Promise((resolve, reject) => {
		statement.run(parameters, function (this, err) {
			if (err) reject(err);
			resolve(this.lastID);
		});
	});
}

export function runGetQuery(statement: Statement, parameters: unknown[] = []) {
	return new Promise((resolve, reject) => {
		statement.get(parameters, (err, row) => {
			if (err) reject(err);
			resolve(row || null);
		});
	});
}
