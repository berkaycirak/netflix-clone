import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

//That function will be executed in each runtime and it will protect our profile route in case of unauthorized users.
export async function getServerSideProps(context: NextPageContext) {
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

const Profiles = () => {
	const router = useRouter();
	const { data: user } = useCurrentUser();
	return (
		<div className='flex items-center justify-center h-full'>
			<div className='flex flex-col'>
				<h1 className='text-3xl md:text-6xl text-white text-center'>
					Who is watching?
				</h1>

				<div
					className='flex-col mx-auto items-center justify-center mt-10 group'
					onClick={() => router.push('/')}>
					<div className='w-44 h-44 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white group-hover:cursor-pointer  '>
						<img src='/images/blue-profile.png' alt='blue' />
					</div>
					<div className='text-center text-gray-400 text-2xl mt-4 group-hover:text-white'>
						{user?.name}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profiles;
