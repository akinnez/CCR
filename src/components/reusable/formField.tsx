import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';

export function InputFormFieldComponent({
	form,
	label,
	name,
	...props
}: {
	form: any;
	label: string;
	name: string;
}) {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({field}) => (
				<FormItem>
					<FormLabel className="text-md">{label}</FormLabel>
					<FormControl>
						<Input {...field} {...props} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export function SelectFormFieldComponent({
	form,
	name,
	label,
	placeholder,
	data = [],
	...props
}: {
	form: any;
	name: string;
	label: string;
	placeholder?: string;
	data?: any[];
}) {
	return (
		<>
			<FormField
				control={form.control}
				name={name}
				render={({field}) => (
					<FormItem>
						<FormLabel className="text-md">{label}</FormLabel>
						<FormControl>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								{...props}
							>
								<SelectTrigger>
									<SelectValue placeholder={placeholder} />
								</SelectTrigger>
								<SelectContent>
									{data?.map((e, i) => (
										<SelectItem key={i} value={e.name}>
											{e.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
}

export interface ICourse {
	id: string;
	semester: string;
	title: string;
	numberOfUnits: number;
	lecturerInCharge: string;
	prerequisite: [];
}

export function CheckboxFieldComponent({
	label,
	checkedValue,
	setCheckedValue,
	...props
}: {
	label: ICourse;
	checkedValue: any[];
	setCheckedValue: any;
}) {
	function evaluateValue(e: any): string | string[] | any {
		if (!e.target.checked && !checkedValue.includes(label)) return;
		if (!e.target.checked && checkedValue.includes(label)) {
			checkedValue.splice(checkedValue.indexOf(label), 1);
			return setCheckedValue(checkedValue);
		}
		if (e.target.checked && !checkedValue.includes(label)) {
			checkedValue.push(label);
			return setCheckedValue(checkedValue);
		}
		return setCheckedValue(checkedValue);
	}
	return (
		<>
			<input
				className="w-5 h-5 mx-2"
				type="checkbox"
				onChange={(e) => evaluateValue(e)}
				{...props}
			/>
		</>
	);
}
