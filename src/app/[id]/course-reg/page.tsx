'use client';

import ModalComponent from '@/components/reusable/modal.component';
import {Button} from '@/components/ui/button';
import {DialogContent, DialogFooter} from '@/components/ui/dialog';
import {ToObservable} from '@/services/toObservable';
import {courses} from '@/utils/Form/formgroup.utils';
import CourseRegComponent from '@/views/Course-Registration/course-reg.component';
import MobileViewRegisterComponent from '@/views/Course-Registration/mobileView.component';
import RegistrationPreviewComponent from '@/views/Course-Registration/registration-preview.component';
import {useState} from 'react';
import {filter} from 'rxjs';

function RegisterPage() {
	const [isOpen, setOpen] = useState(false);
	const [previewMode, setPreviewMode] = useState<Array<any>>([]);

	async function onSubmit(e: any, value: any) {
		await e.preventDefault();
		let first: any = [];
		let second: any = [];

		const data = ToObservable(value)
			.pipe(filter((e: any) => e.id % 2 != 0))
			.subscribe({
				next: (res) => {
					first.push(res);
				},
			});

		const secondData = ToObservable(value)
			.pipe(filter((e: any) => e.id % 2 == 0))
			.subscribe({
				next: (res) => second.push(res),
			});

		let previewMode = [
			{
				semester: 'first',
				courses: first,
			},
			{
				semester: 'second',
				courses: second,
			},
		];
		setPreviewMode(previewMode);
		console.log(value, previewMode);
		setOpen(true);
		data.unsubscribe(), secondData.unsubscribe();
	}
	return (
		<>
			<CourseRegComponent formList={courses} successFunction={onSubmit} />
			{isOpen && previewMode.length != 0 && (
				<ModalComponent
					isOpen={isOpen}
					{...{className: 'overflow-x-hidden overflow-y-auto'}}
				>
					<RegistrationPreviewComponent
						previewMode={previewMode}
						setOpen={setOpen}
					/>
				</ModalComponent>
			)}
		</>
	);
}

export default RegisterPage;
