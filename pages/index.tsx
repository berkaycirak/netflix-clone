import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';

export async function getServerSideProps(context: NextPageContext) {
	// Thanks to get logic, we protect our website from unauthorized users.
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

export default function Home() {
	return (
		<>
			<Navbar />
		</>
	);
}
