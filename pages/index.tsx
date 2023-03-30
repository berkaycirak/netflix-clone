import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

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
	const { data: user } = useCurrentUser();
	return (
		<>
			<h1 className='text-green-400 text-4xl'>Netflix</h1>
			<p className='text-orange-300'>Logged in as : {user?.name}</p>
			<button
				className='h-10 w-full bg-white'
				onClick={() => signOut()}>
				Logout!
			</button>
		</>
	);
}
