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
					{data.title} ({data.course_id}
					{data.code})
				</DialogTitle>
				<DialogDescription className="my-3">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Ad, rem tempore consequatur fuga blanditiis incidunt soluta
					sint eaque facilis repellat accusamus mollitia. Quasi dicta
					unde molestias nulla quaerat, animi omnis.
				</DialogDescription>
				<div className="space-y-3">
					<p>Units: {data.units} units</p>
					<p>Status: {data.isOptional ? 'Elective' : 'Compulsory'}</p>
					<p className="font-semibold">Pre-Requisite</p>
					<p>{data.prerequisite}</p>
				</div>
				<DialogFooter>
					<Button
						className="m-5"
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
