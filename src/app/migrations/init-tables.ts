import type { Database } from 'sqlite3';

export function initTables(db: Database) {
	createUserTable(db);
	createPurposeTable(db);
	createTimeBucketTable(db);
	createTimePointTable(db);
	createTimeBucketPointTable(db);
}

function createUserTable(db: Database) {
	const query = `
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
	`;
	dbRun(db, query);
}

function createPurposeTable(db: Database) {
	const query = `
		CREATE TABLE IF NOT EXISTS purpose (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			userId INTEGER,
			name TEXT,
			dateCreated DATE,
			dateUpdate DATE,
			hours FLOAT,
			FOREIGN KEY (userId) REFERENCES user(id)
		)
	`;
	dbRun(db, query);
}

function createTimeBucketTable(db: Database) {
	const query = `
		CREATE TABLE IF NOT EXISTS timeBucket (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			purposeId INTEGER,
			name TEXT,
			staticHours FLOAT,
			dinamicHours FLOAT,
			FOREIGN KEY (purposeId) REFERENCES purpose(id)
		)
	`;
	dbRun(db, query);
}

function createTimePointTable(db: Database) {
	const query = `
		CREATE TABLE IF NOT EXISTS timePoint (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			timeBucketId INTEGER,
			skipped BOOLEAN,
			date DATE,
			FOREIGN KEY (timeBucketId) REFERENCES timeBucket(id)
		)
	`;
	dbRun(db, query);
}

function createTimeBucketPointTable(db: Database) {
	const query = `
		CREATE TABLE IF NOT EXISTS timeBucketPoint (
			timeBucketId INTEGER,
			timePointId INTEGER,
			hours FLOAT,
			FOREIGN KEY (timeBucketId) REFERENCES timeBucket(id),
			FOREIGN KEY (timePointId) REFERENCES timePoint(id)
		)
	`;
	dbRun(db, query);
}

function dbRun(db: Database, query: string) {
	db.run(query, (err) => {
		if (err) {
			throw err;
		}
	});
}
