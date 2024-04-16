import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form} from '@/components/ui/form';
import {Button} from '@/components/ui/button';
import {InputFormFieldComponent} from '@/components/reusable/formField';
import {Card} from '@/components/ui/card';

function FormComponent({
	loading,
	successFunction,
	errorFunction,
	formSchema,
	defaultValues,
	formList,
	title,
	cta,
	classNames,
}: {
	loading?: boolean;
	successFunction?: any;
	errorFunction?: any;
	formSchema: any;
	defaultValues?: any;
	formList: any;
	title: string;
	cta: string;
	classNames?: string;
}) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	return (
		<div className={`flex justify-center items-center ${classNames}`}>
			<div className="w-full md:w-2/3 lg:1/3 shadow-2xl lg:my-5">
				<Card className="px-5 py-3 bg-transparent lg:bg-white">
					<div className="my-5">
						<h1 className="text-3xl lg:text-4xl font-bold text-center">
							{title}
						</h1>
						<div className="my-5">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(
										successFunction,
										errorFunction
									)}
									className="space-y-5"
								>
									{formList.map((e: any, i: number) => (
										<InputFormFieldComponent
											key={i}
											form={form}
											label={e.label}
											name={e.name}
											{...e.props}
										/>
									))}
									<div className="py-2">
										<Button
											disabled={loading}
											className="w-full text-lg"
											size={'lg'}
										>
											{loading ? 'Loading...' : cta}
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
export default FormComponent;
