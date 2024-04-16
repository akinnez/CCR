'use client';
import {useState} from 'react';

import {useSearchParams, notFound, useRouter} from 'next/navigation';

import {AxiosResponse} from 'axios';
import {toast} from 'sonner';

import FormComponent from '@/components/reusable/utilForm.component';

import {post} from '@/services/api';

import {LoginformSchema} from '@/utils/Form/formSchema.util';
import {LoginForm} from '@/utils/Form/formgroup.utils';
import {LoginDefaultValues} from '@/utils/Form/form_default_values.util';
import {IResponse} from '@/utils/Response/IResponse';

import {BASE_URL, LoginValues} from '../../../environtment';

function LogInComponent() {
	const route = useSearchParams();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const loginSearchParams = [null, 'fresh', 'return'];
	let params = route.get('cat');

	if (!loginSearchParams.includes(params as string)) return notFound();

	function onsubmit(values: any) {
		setLoading(true);
		console.log(values);
		const sub = post<IResponse>(
			BASE_URL + '/student/login',
			values
		).subscribe({
			next: (res: AxiosResponse<IResponse | any>) => {
				console.log(res);
				sessionStorage.setItem(
					LoginValues,
					JSON.stringify(res.data?.payload)
				);
				toast(res.data?.message);
				setLoading(false);
				router.push(`/${res.data?.payload?.first_name}`);
			},
			error: (err) => {
				setLoading(false);
			},
			complete: () => {
				sub.unsubscribe();
			},
		});
	}
	function onError(values: any) {
		console.log(values);
	}
	return (
		<FormComponent
			loading={loading}
			classNames="h-svh lg:h-full"
			title="Login"
			successFunction={onsubmit}
			cta="Login"
			errorFunction={onError}
			defaultValues={LoginDefaultValues}
			formList={LoginForm}
			formSchema={LoginformSchema}
		/>
	);
}

export default LogInComponent;
