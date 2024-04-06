'use client';
import Link from 'next/link';
import {Button} from '@/components/ui/button';

function SidebarComponent({
	close,
	isclose,
	user,
}: {
	isclose: boolean;
	close: any;
	user: string;
}) {
	const menuBarList = [
		{label: 'Home', link: `/${user}`},
		{label: 'Course Registration', link: `/${user}/course-reg`},
		{label: 'View Payment Transaction', link: `/${user}/transaction`},
		{label: 'Check Result', link: `/${user}/result`},
	];
	return (
		<>
			<div
				className={`h-screen transition-all duration-500 ease-linear lg:w-2/4 xl:w-1/4 ${
					!isclose
						? 'absolute lg:static top-0 z-30 lg:z-0 -left-[100%] lg:-left-0'
						: 'fixed block w-full top-0 left-0'
				}  `}
			>
				<div>
					<Button
						className="border absolute right-0 top-0 lg:hidden px-3 py-2"
						onClick={() => close()}
					>
						close
					</Button>

					<div className="flex items-center justify-center h-screen bg-[rgb(13,17,50)]">
						<ul>
							{menuBarList.map((e, i) => (
								<Link href={e.link} key={i}>
									<li className="py-3 text-white font-semibold text-lg">
										{e.label}
									</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default SidebarComponent;
