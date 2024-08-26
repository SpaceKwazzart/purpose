import type { Database } from 'sqlite3';

import { runGetQuery, runQuery } from '$lib/shared/api/lib';
import { userSchema } from '$lib/shared/api/schemas';
import { hash } from '$lib/shared/lib/hash';

export async function getUserByEmail(db: Database, email: string) {
	const select = db.prepare('SELECT * FROM user WHERE email = ?');
	const response = await runGetQuery(select, [email]);
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
	const passwordHash = await hash(password);
	const create = db.prepare(
		`INSERT INTO user 
    (emailVerified, photoUrl, registerDate, lastInteractionDate, email, passwordHash, displayName)
    VALUES (false, NULL, ?, ?, ?, ?, ?)`
	);
	return await runQuery(create, [
		new Date().toISOString(),
		new Date().toISOString(),
		email,
		passwordHash,
		name
	]);
}
