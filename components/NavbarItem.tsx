interface INavbar {
	label: string;
}

const NavbarItem = ({ label }: INavbar) => {
	return (
		<div className='text-white cursor-pointer hover:text-gray-300 transition'>
			{label}
		</div>
	);
};

export default NavbarItem;
