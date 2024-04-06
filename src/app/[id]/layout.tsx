import type {Metadata} from 'next';
import GeneralComponent from '@/components/reusable/general.component';

export const metadata: Metadata = {
	title: 'Student Home',
	description: 'This is the HomePage for students',
};
export default function HomeLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<div>
				<GeneralComponent children={children} />
			</div>
		</>
	);
}
