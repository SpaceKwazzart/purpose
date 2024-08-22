import type { Database } from 'sqlite3';

export function initTables(db: Database) {
	createUserTable(db);
	createPurposeTable(db);
	createTimeBucketTable(db);
	createTimePointTable(db);
}

function createUserTable(db: Database) {
	const query = 'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT)';
	dbRun(db, query);
}

function createPurposeTable(db: Database) {
	const query = 'CREATE TABLE IF NOT EXISTS purpose (id INTEGER PRIMARY KEY AUTOINCREMENT)';
	dbRun(db, query);
}

function createTimeBucketTable(db: Database) {
	const query = 'CREATE TABLE IF NOT EXISTS timeBucket (id INTEGER PRIMARY KEY AUTOINCREMENT)';
	dbRun(db, query);
}

function createTimePointTable(db: Database) {
	const query = 'CREATE TABLE IF NOT EXISTS timePoint (id INTEGER PRIMARY KEY AUTOINCREMENT)';
	dbRun(db, query);
}

function dbRun(db: Database, query: string) {
	db.run(query, (err) => {
		if (err) {
			throw err;
		}
	});
}
