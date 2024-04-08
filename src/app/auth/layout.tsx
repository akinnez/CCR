import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Student Home',
	description: 'This is the HomePage for students',
};
export default function AuthLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<div className="lg:grid lg:grid-cols-2 h-screen lg:h-full ">
				<div className="bg-foreground hidden lg:block lg:h-screen sticky top-0"></div>
				<div className="px-3 lg:px-0">{children}</div>
			</div>
		</>
	);
}
