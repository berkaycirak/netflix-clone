import useBillboard from '@/hooks/useBillboard';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useEffect } from 'react';

const Billboard = () => {
	const { data } = useBillboard();

	return (
		<div className='relative h-[56.25vw] '>
			<video
				className='w-full h-full object-cover brightness-[65%]'
				autoPlay
				muted
				loop
				poster={data?.thumbnailUrl}
				src={data?.videoUrl}></video>
			<div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16 '>
				<p className='text-white text-xl  md:text-5xl h-full  lg:text-6xl font-bold drop-shadow-xl'>
					{data?.title}
				</p>
				<p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
					{data?.description}
				</p>
				<div className='flex items-center mt-3 md:mt-4 gap-3'>
					{data && (
						<button className='bg-white/30 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-white/20 transition '>
							<AiOutlineInfoCircle className='mr-1' />
							More Info
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Billboard;
