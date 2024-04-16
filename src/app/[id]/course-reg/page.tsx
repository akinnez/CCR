'use client';

import ModalComponent from '@/components/reusable/modal.component';
import loginGuard from '@/services/login.guard';
import {courses} from '@/utils/Form/formgroup.utils';
import CourseRegComponent from '@/views/Course-Registration/course-reg.component';
import RegistrationPreviewComponent from '@/views/Course-Registration/registration-preview.component';
import {useParams, useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';
import {toast} from 'sonner';

function RegisterPage() {
	const route = useRouter();
	const params = useParams();

	const [isOpen, setOpen] = useState(false);
	const [value, setValue] = useState<Array<object> | null>(null);

	useEffect(() => {
		if (loginGuard(params?.id as string)) {
			toast('Please, Log In ...');
			route.push('/auth/login');
		}
	}, [params?.id as string]);

	async function onSubmit(e: any, value: any) {
		await e.preventDefault();
		setValue(value);
		setOpen(true);
	}
	return (
		<>
			<CourseRegComponent formList={courses} successFunction={onSubmit} />
			{isOpen && (
				<ModalComponent isOpen={isOpen}>
					<RegistrationPreviewComponent
						setOpen={setOpen}
						value={value}
					/>
				</ModalComponent>
			)}
		</>
	);
}

export default RegisterPage;
