import {Button} from '@/components/ui/button';
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
} from '@/components/ui/dialog';

function ViewCourseModal({data, setOpen}: {data: any; setOpen: any}) {
	console.log(data);

	return (
		<>
			<DialogContent>
				<DialogTitle className="font-semibold mt-5 text-center leading-6">
					{data.title} ({data.code}
					{data.id})
				</DialogTitle>
				<DialogDescription>Not Available</DialogDescription>
				<div className="space-y-3">
					<p>Units: {data.numberOfUnits}</p>
					<p>Lecturer-in-charge: {data.lecturerInCharge}</p>
					<p className="font-semibold">Pre-Requisite</p>
					<p>
						{data.prerequisite.length != 0
							? data.prerequisite
							: 'None'}
					</p>
				</div>
				<DialogFooter>
					<Button
						variant={'destructive'}
						size={'lg'}
						onClick={() => setOpen(false)}
					>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
			;
		</>
	);
}

export default ViewCourseModal;
