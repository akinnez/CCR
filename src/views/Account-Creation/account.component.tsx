import {useState} from 'react';
import {useForm} from 'react-hook-form';

import {useRouter} from 'next/navigation';

import {accCreationformSchema} from '@/utils/Form/formSchema.util';
import {AccoutCreationDefaultValues} from '@/utils/Form/form_default_values.util';
import {AccountCreationForm} from '@/utils/Form/formgroup.utils';
import {checkLevels} from '@/utils/checkLevels.util';
import {IResponse} from '@/utils/Response/IResponse';

import {useGetApi} from '@/hooks/useApi';
import {zodResolver} from '@hookform/resolvers/zod';
import {
	InputFormFieldComponent,
	SelectFormFieldComponent,
} from '@/components/reusable/formField';
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Form} from '@/components/ui/form';

import {ToObservable} from '@/services/toObservable';
import {post} from '@/services/api';

import {z} from 'zod';
import {find} from 'rxjs';
import {AxiosResponse} from 'axios';
import {toast} from 'sonner';

import {BASE_URL} from '../../../environtment';

function AccountComponent() {
	const route = useRouter();
	const form = useForm<z.infer<typeof accCreationformSchema>>({
		resolver: zodResolver(accCreationformSchema),
		defaultValues: AccoutCreationDefaultValues,
	});

	const [responseLoading, setLoading] = useState<boolean>(false);
	const [data, loading, error] = useGetApi('/data/courses.json');
	const [filterData, setFilterData] = useState<Array<object>>();
	const [courses, setCourses] = useState<string>('');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	const selectProps = {
		onValueChange: (e: any) => onchanged(e),
	};
	const onsubmit = (values: any) => {
		let level = checkLevels(values.studentID);
		if (!level || level == -1) return alert('An error has occur');
		values.student_level = level;
		values.faculty = courses;
		setLoading(true);
		const subs = post<IResponse>(
			BASE_URL + '/student/register',
			values
		).subscribe({
			next: (res: AxiosResponse<IResponse>) => {
				toast(res.data.message);
				setLoading(false);
				route.push('/auth/login');
			},
			error: (err) => {
				console.log(err);
				toast(err.response.data.message);
				if (err.response.data.statusCode == 400) {
					route.push('/auth/login');
				}
				setLoading(false);
			},
			complete: () => {
				subs.unsubscribe();
			},
		});
	};

	function onchanged(e: string) {
		const value = ToObservable(data)
			.pipe(find((evt) => evt.name == e))
			.subscribe({
				next: (res) => {
					setCourses(e);
					setFilterData(res.departments);
				},
				error: (err) => console.log(err),
			});
		return value.unsubscribe();
	}

	function onError(values: any) {
		console.log(values);
	}

	return (
		<div
			className={`flex justify-center items-center h-full py-20 lg:py-0`}
		>
			<div className="w-full md:w-2/3 lg:1/3 shadow-2xl lg:my-5">
				<Card className="px-5 py-3 bg-transparent lg:bg-white">
					<div className="my-5">
						<h1 className="text-3xl lg:text-4xl font-bold text-center">
							Create an account
						</h1>
						<div className="my-5">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(
										onsubmit,
										onError
									)}
									className="space-y-5"
								>
									<SelectFormFieldComponent
										form={form}
										name="faculty"
										label="Faculty"
										data={data as any[]}
										placeholder="Select your faculty"
										{...selectProps}
									/>
									<SelectFormFieldComponent
										form={form}
										name="department"
										label="Department"
										data={filterData as any[]}
										placeholder="Select your Department"
									/>

									{AccountCreationForm.map(
										(e: any, i: number) => (
											<InputFormFieldComponent
												key={i}
												form={form}
												label={e.label}
												name={e.name}
												{...e.props}
											/>
										)
									)}
									<div className="py-2">
										<Button
											disabled={responseLoading}
											className="w-full text-lg"
											size={'lg'}
										>
											{!responseLoading
												? 'Create an account'
												: 'Loading...'}
										</Button>
									</div>
								</form>
							</Form>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
export default AccountComponent;
