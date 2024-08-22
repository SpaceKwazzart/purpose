import type { Handle } from '@sveltejs/kit';

import { getDatabaseConection } from '$lib/shared/api/connection';
import { initTables } from '$lib/shared/api/init-tables';

export const handle: Handle = async ({ event, resolve }) => {
	if (!event.locals.db) {
		const db = getDatabaseConection();

		event.locals.db = db;
		initTables(db);
	}

	const resp = await resolve(event);
	return resp;
};
