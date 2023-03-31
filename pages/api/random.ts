import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(405).end();
	}

	try {
		// Check whether the user logged in
		await serverAuth(req);

		// Pick random movie from db
		const movieCount = await prismadb.movie.count();
		const randomIntex = Math.floor(Math.random() * movieCount);

		const randomMovies = await prismadb.movie.findMany({
			take: 1,
			skip: randomIntex,
		});

		return res.status(200).json(randomMovies[0]);
	} catch (error) {
		console.log(error);
	}
}
