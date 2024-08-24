import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

import { JWT_SECRET } from '$env/static/private';

export function generateJwt(data: Record<string, unknown>, expiresIn = '24h') {
	return sign(data, JWT_SECRET, { expiresIn });
}

export function verifyJwt(jwt: string): Record<string, unknown> | null {
	try {
		return verify(jwt, JWT_SECRET);
	} catch (err) {
		console.error('JWT verification failed:', err);
		return null;
	}
}
