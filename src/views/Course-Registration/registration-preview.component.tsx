import {DialogContent, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import MobileViewRegisterComponent from './mobileView.component';
import {Button} from '@/components/ui/button';

function RegistrationPreviewComponent({
	previewMode,
	setOpen,
}: {
	setOpen: any;
	previewMode: any;
}) {
	return (
		<>
			<DialogContent className="my-10 overflow-x-hidden overflow-y-auto">
				<DialogTitle className="font-bold text-lg text-center mt-5">
					Course Registration for {new Date().getFullYear()}/
					{new Date().getFullYear() + 1} Academic Session
				</DialogTitle>
				{previewMode.map((e: any, i: number) => (
					<>
						<h1>{e.semester}</h1>
						<MobileViewRegisterComponent
							key={i}
							isPreview={true}
							formList={e.courses}
						/>
					</>
				))}
				<DialogFooter>
					<div className="flex justify-between w-full">
						<Button size={'lg'}>SUBMIT</Button>
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
