'use client';
import {LoginformSchema} from '@/utils/Form/formSchema.util';
import {LoginForm} from '@/utils/Form/formgroup.utils';
import FormComponent from '@/components/reusable/utilForm.component';
import {LoginDefaultValues} from '@/utils/Form/form_default_values.util';
import {useSearchParams, notFound} from 'next/navigation';

function LogInComponent() {
	const route = useSearchParams();
	const loginSearchParams = [null, 'fresh', 'return'];
	let params = route.get('cat');

	if (!loginSearchParams.includes(params as string)) return notFound();

	function onsubmit(values: any) {
		console.log(values);
	}
	function onError(values: any) {
		console.log(values);
	}
	return (
		<FormComponent
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
