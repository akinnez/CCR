import type {Metadata} from 'next';
import Navbar from '@/components/reusable/navbar';
import {Toaster} from 'sonner';

export const metadata: Metadata = {
	title: 'Student Home',
	description: 'This is the HomePage for students',
};
export default function HomeLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<div>
				<Navbar />
				<div className="px-3 lg:px-10">{children}</div>
				<Toaster />
			</div>
		</>
	);
}
