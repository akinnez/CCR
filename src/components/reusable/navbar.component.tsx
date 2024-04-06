'use client';
import {Button} from '@/components/ui/button';

function NavbarComponent({
	close,
	isclose,
	profileName,
}: {
	isclose: boolean;
	profileName?: any;
	close: any;
}) {
	return (
		<>
			<div className={`${isclose && 'w-full'}`}>
				<nav className="flex justify-between items-center w-full py-5 px-3 lg:px-10 shadow-md">
					<Button
						size={'icon'}
						className="lg:hidden px-3 py-2"
						onClick={() => close()}
					>
						open
					</Button>
					<h1 className="font-bold text-2xl lg:text-4xl text-center lg:text-left w-full">
						ABD College
					</h1>
					<p className="">{profileName}</p>
				</nav>
			</div>
		</>
	);
}

export default NavbarComponent;
