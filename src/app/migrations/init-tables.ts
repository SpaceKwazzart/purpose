import { runQuery } from '$lib/shared/api/lib';
import type { Database } from 'sqlite3';

export function initTables(db: Database) {
	createUserTable(db);
	createPurposeTable(db);
	createTimeBucketTable(db);
	createTimePointTable(db);
	createTimeBucketPointTable(db);
}

function createUserTable(db: Database) {
	const create = db.prepare(`
		CREATE TABLE IF NOT EXISTS user (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			email TEXT UNIQUE,
			passwordHash TEXT,
			emailVerified BOOLEAN,
			registerDate DATE,
			lastInteractionDate DATE,
			displayName TEXT NULLABLE,
			photoUrl TEXT NULLABLE
		)
	`);
	runQuery(create);
}

function createPurposeTable(db: Database) {
	const create = db.prepare(`
		CREATE TABLE IF NOT EXISTS purpose (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			userId INTEGER,
			name TEXT,
			dateCreated DATE,
			dateUpdate DATE,
			hours FLOAT,
			FOREIGN KEY (userId) REFERENCES user(id)
		)
	`);
	runQuery(create);
}

function createTimeBucketTable(db: Database) {
	const create = db.prepare(`
		CREATE TABLE IF NOT EXISTS timeBucket (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			purposeId INTEGER,
			name TEXT,
			staticHours FLOAT,
			e FLOAT,
			FOREIGN KEY (purposeId) REFERENCES purpose(id)
		)
	`);
	runQuery(create);
}

function createTimePointTable(db: Database) {
	const create = db.prepare(`
		CREATE TABLE IF NOT EXISTS timePoint (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			timeBucketId INTEGER,
			skipped BOOLEAN,
			date DATE,
			FOREIGN KEY (timeBucketId) REFERENCES timeBucket(id)
		)
	`);
	runQuery(create);
}

function createTimeBucketPointTable(db: Database) {
	const create = db.prepare(`
		CREATE TABLE IF NOT EXISTS timeBucketPoint (
			timeBucketId INTEGER,
			timePointId INTEGER,
			hours FLOAT,
			FOREIGN KEY (timeBucketId) REFERENCES timeBucket(id),
			FOREIGN KEY (timePointId) REFERENCES timePoint(id)
		)
	`);
	runQuery(create);
}
