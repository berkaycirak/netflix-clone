import Input from '@/components/Input';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

function Auth() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [variant, setVariant] = useState('login');

	// Helping to toggle login and register variants
	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === 'login' ? 'register' : 'login'
		);
	}, []);

	//login function
	const login = useCallback(async () => {
		try {
			await signIn('credentials', {
				email,
				password,
				callbackUrl: '/profiles',
			});
		} catch (error) {
			console.log(error);
		}
	}, [email, password]);

	// register function to create a user
	const register = useCallback(async () => {
		try {
			await axios.post('/api/register', {
				email,
				name,
				password,
			});
			login();
		} catch (error) {
			console.log(error);
		}
	}, [email, name, password]);

	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover">
			<div className='h-full bg-black/0 md:bg-black/70'>
				<nav className='px-12 py-5'>
					<img src='/images/logo.png' alt='logo' className='h-12' />
				</nav>
				<div className='flex justify-center mt-2  '>
					<div className='bg-black/80 p-16 rounded-md md:w-2/5 md:max-w-md  '>
						<h2 className='text-white text-4xl mb-8 font-semibold '>
							{variant === 'login' ? 'Sign in' : 'Create an account'}
						</h2>
						<div className='flex flex-col gap-4'>
							{variant === 'register' && (
								<Input
									label='Username'
									onChange={(e: any) => setName(e.target.value)}
									id='name'
									value={name}
								/>
							)}

							<Input
								label='Email'
								onChange={(e: any) => setEmail(e.target.value)}
								id='email'
								type='email'
								value={email}
							/>
							<Input
								label='Password'
								onChange={(e: any) => setPassword(e.target.value)}
								id='password'
								type='password'
								value={password}
							/>
						</div>
						<button
							onClick={variant === 'login' ? login : register}
							className='bg-red-500 py-3  text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
							{variant === 'login' ? 'Login' : 'Sign up'}
						</button>
						<p className='text-neutral-500 mt-12'>
							{variant === 'register'
								? 'Already have an account?'
								: 'First time using Netflix?'}
							<span
								onClick={toggleVariant}
								className='text-white ml-1 hover:underline cursor-pointer'>
								{variant === 'register'
									? 'Login'
									: 'Create an account'}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Auth;
