import {Button} from '@/components/ui/button';

function StudentHomeComponent() {
	return (
		<>
			<div className="my-7 space-y-4 font-semibold capitalize text-lg tracking-widest">
				<h3>Name: Akanji Oluwadamilare</h3>
				<h3>Course: courseName</h3>
				<h3>Department: department</h3>
				<h3>Level: 700</h3>
			</div>
			<div>
				<Button size={'lg'}>Edit Profile</Button>
			</div>
		</>
	);
}

export default StudentHomeComponent;
