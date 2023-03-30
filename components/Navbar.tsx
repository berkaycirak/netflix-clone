import NavbarItem from './NavbarItem';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import { useCallback, useState, useEffect } from 'react';
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showAccountMenu, setShowAccountMenu] = useState(false);
	const [showBackground, setShowBackground] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((prev) => !prev);
	}, []);
	const toggleAccountMenu = useCallback(() => {
		setShowAccountMenu((prev) => !prev);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			console.log(window.scrollY);
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className='fixed z-40 w-full '>
			<div
				className={`px-4
        md:px-16
        py-6
        flex
        items-center
        transition
         ${showBackground ? 'bg-zinc-900/90' : ''}`}>
				<img
					className='h-5 lg:h-7'
					src='/images/logo.png'
					alt='logo'
				/>
				<div className='ml-8 gap-7 hidden lg:flex'>
					<NavbarItem label='Home' />
					<NavbarItem label='Series' />
					<NavbarItem label='Films' />
					<NavbarItem label='New & Popular' />
					<NavbarItem label='My List' />
					<NavbarItem label='Browse by Languages' />
				</div>
				<div
					className='lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative'
					onClick={toggleMobileMenu}>
					<p className='text-white text-sm'>Browse</p>
					<BsChevronDown className='text-white transition' />
					<MobileMenu visible={showMobileMenu} />
				</div>
				<div className='flex ml-auto items-center gap-7'>
					<div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
						<BsSearch />
					</div>
					<div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
						<BsBell />
					</div>
					<div
						className='flex items-center gap-2 cursor-pointer relative'
						onClick={toggleAccountMenu}>
						<div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
							<img src='/images/blue-profile.png' alt='profile' />
						</div>
						<BsChevronDown className='text-white transition' />
						<AccountMenu visible={showAccountMenu} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
