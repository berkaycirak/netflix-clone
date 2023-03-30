interface IMobileMenu {
	visible?: boolean;
}

const MobileMenu = ({ visible }: IMobileMenu) => {
	if (!visible) {
		return null;
	}

	return (
		<div className='bg-black w-56 absolute top-8 py-5 border-2'>
			<div className='flex flex-col gap-4'>
				<div className='px-3 text-white text-center hover:underline'>
					Home
				</div>
				<div className='px-3 text-white text-center hover:underline'>
					Series
				</div>
				<div className='px-3 text-white text-center hover:underline'>
					Films
				</div>
				<div className='px-3 text-white text-center hover:underline'>
					New & Popular
				</div>
				<div className='px-3 text-white text-center hover:underline'>
					My List
				</div>
				<div className='px-3 text-white text-center hover:underline'>
					Browse by Languages
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
