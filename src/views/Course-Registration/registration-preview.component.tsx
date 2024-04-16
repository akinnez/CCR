import {DialogContent, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';

function RegistrationPreviewComponent({
	setOpen,
	value,
}: {
	setOpen: any;
	value?: any;
}) {
	function onsubmit() {
		console.log(value);
	}
	return (
		<>
			<DialogContent className="my-10 overflow-x-hidden overflow-y-auto">
				<DialogTitle className="font-bold text-lg lg:text-2xl  text-center mt-5">
					Course Registration Confirmation
				</DialogTitle>
				<p className="my-5 text-center lg:text-lg">
					Are you sure you want to submit???
				</p>
				<DialogFooter>
					<div className="flex justify-between w-full">
						<Button size={'lg'} onClick={onsubmit}>
							SUBMIT
						</Button>
						<Button
							variant={'destructive'}
							size={'lg'}
							onClick={() => setOpen(false)}
						>
							CLOSE
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</>
	);
}

export default RegistrationPreviewComponent;
