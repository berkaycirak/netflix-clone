import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

interface IAccountMenu {
	visible?: boolean;
}

const AccountMenu = ({ visible }: IAccountMenu) => {
	const { data: user } = useCurrentUser();
	if (!visible) return null;

	return (
		<div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-gray-800 flex'>
			<div className='flex px-3 gap-3 items-center w-full group'>
				<img
					src='/images/blue-profile.png'
					className='w-8 rounded-md'
					alt=''
				/>
				<p className='text-white text-sm group-hover:underline'>
					{user?.name}
				</p>
			</div>
			<hr className='bg-gray-600 border-0 h-px my-4' />
			<div
				onClick={() => signOut()}
				className='px-3 text-center text-white text-sm hover:underline'>
				Sign out of Netflix
			</div>
		</div>
	);
};

export default AccountMenu;
