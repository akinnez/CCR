import {resultCheckerformSchema} from '@/utils/Form/formSchema.util';
import {ResultCheckerForm} from '@/utils/Form/formgroup.utils';
import {ResultCheckerDefaultValues} from '@/utils/Form/form_default_values.util';
import FormComponent from '@/components/reusable/utilForm.component';

function ResultCheckerComponent() {
	function onsubmit(values: any) {
		console.log(values);
	}
	function onError(values: any) {
		console.log(values);
	}

	return (
		<FormComponent
			classNames="h-svh lg:h-full"
			title="Result Checker"
			successFunction={onsubmit}
			cta="Check Result"
			errorFunction={onError}
			defaultValues={ResultCheckerDefaultValues}
			formList={ResultCheckerForm}
			formSchema={resultCheckerformSchema}
		/>
	);
}

export default ResultCheckerComponent;
