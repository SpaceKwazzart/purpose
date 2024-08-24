import type { Database } from 'sqlite3';

import { runQuery } from '$lib/shared/api/lib';
import { userSchema } from '$lib/shared/api/schemas';
import { hash } from '$lib/shared/lib/hash';

export async function getUserByEmail(db: Database, email: string) {
	const query = 'SELECT * FROM user WHERE email = ?';
	const response = await runQuery(db, query, [email]);
	if (!response) {
		return null;
	}
	return userSchema.parse(response);
}

export async function createUser(
	db: Database,
	email: string,
	password: string,
	name: string | null = null
) {
	const passwordHash = hash(password);
	const query = `INSERT INTO user () VALUES ()`;
}
