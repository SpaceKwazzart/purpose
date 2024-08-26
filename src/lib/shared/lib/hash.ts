import bcrypt from 'bcrypt';

export async function hash(str: string): Promise<string> {
	const saltRounds = 10;
	return await bcrypt.hash(str, saltRounds);
}
