import React from 'react';

interface InputProps {
	id: string;
	onChange: any;
	value: string;
	label: string;
	type?: string;
}

const Input: React.FC<InputProps> = ({
	id,
	value,
	onChange,
	label,
	type,
}) => {
	return (
		<div className='relative'>
			<input
				onChange={onChange}
				type={type}
				value={value}
				id={id}
				className='block rounded-md px-6 pt-6 pb-1 w-full text-white text-md bg-neutral-700 focus:outline-none peer
    
     
    '
				placeholder=' '
			/>
			<label
				className=' absolute scale-75  text-md text-zinc-400 duration-150 transform -translate-y-3 origin-[0] top-4 z-10 left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3
            '
				htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default Input;
