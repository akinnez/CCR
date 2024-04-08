'use client';
import {useState} from 'react';

import Link from 'next/link';

import {Button} from '@/components/ui/button';
import useName from '@/hooks/useName';

function Navbar() {
	const [isOpen, setOpen] = useState(false);
	const [token, setToken] = useState(false);
	const name = useName();

	function open() {
		setOpen(true);
	}
	function close() {
		setOpen(false);
	}
	const navList = [
		{
			label: 'Home',
			link: '/',
			classname: '',
			props: {},
		},
		{
			label: 'Admission',
			link: '/',
			classname: '',
			props: {},
		},
		{
			label: `${token ? 'Course Registration' : 'Academics'}`,
			link: `${token ? `/${name}/course-reg` : '/'}`,
			classname: '',
			props: {},
		},
		{
			label: `${token ? 'Result Checker' : 'Contact'}`,
			link: '/',
			classname: '',
			props: {},
		},
		{
			label: `${!token ? 'About' : ''}`,
			link: '/',
			classname: '',
			props: {},
		},
	];
	return (
		<>
			<header className="sticky top-0 py-4 w-full flex lg:px-10 justify-between items-center bg-white text-foreground shadow-sm shadow-foreground">
				<div className="lg:hidden">
					<Button variant={'outline'} onClick={() => open()}>
						open
					</Button>
				</div>
				<Link
					href={token ? `/${name}` : '/'}
					className="text-2xl lg:text-3xl tracking-wider cursor-pointer"
				>
					TheOladejos
				</Link>

				<nav
					className={`fixed lg:static top-0 z-10 flex-col min-w-[300px] lg:w-full h-screen lg:h-full justify-start flex lg:flex-row lg:justify-center items-center ${
						isOpen
							? 'left-0 bg-foreground transition-all duration-500 ease-linear lg:bg-white py-40 lg:py-0'
							: '-left-[100%] lg:left-0'
					}`}
				>
					<Button
						className="absolute top-4 right-0 mx-5 lg:hidden"
						onClick={() => close()}
					>
						clear
					</Button>

					{navList.map((e, i) => (
						<Link
							key={i}
							{...e.props}
							href={e.link}
							className={`text-white lg:text-foreground w-full lg:w-auto text-lg my-2 mx-4 font-medium py-4 lg:py-0 px-6 rounded-md lg:mx-3 lg:text-xl hover:cursor-pointer ${e.classname}`}
						>
							{e.label}
						</Link>
					))}
				</nav>

				{token ? (
					<div>
						<span>{name}</span>
					</div>
				) : (
					<div>
						<Link href="/auth/login">
							<Button className="font-semibold">Login</Button>
						</Link>
					</div>
				)}
			</header>
		</>
	);
}

export default Navbar;
