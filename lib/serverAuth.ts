import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/lib/prismadb';

// Api controller.

// Req parameter holds the jwt token which getSession can use to get logged in user.
const serverAuth = async (req: NextApiRequest) => {
	const session = await getSession({ req });

	if (!session?.user?.email) {
		throw new Error('Not signed in');
	}

	// since session doesn't have all data, we can get the data from database
	const currentUser = await prismadb.user.findUnique({
		where: {
			email: session.user.email,
		},
	});

	if (!currentUser) {
		throw new Error('Not signed in');
	}

	return { currentUser };
};

export default serverAuth;
