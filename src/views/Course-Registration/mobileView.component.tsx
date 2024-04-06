import {CheckboxFieldComponent} from '@/components/reusable/formField';
import {Card} from '@/components/ui/card';
import React from 'react';

function MobileViewRegisterComponent({
	formList,
	checkedValue,
	isPreview,
	setCheckedValue,
}: {
	isPreview?: boolean;
	formList?: any;
	checkedValue?: any;
	setCheckedValue?: any;
}) {
	return (
		<>
			{formList?.map((e: any, i: number) => (
				<Card key={i} className="space-y-2 mb-5 p-2">
					{!isPreview && (
						<div className="float-end">
							<CheckboxFieldComponent
								checkedValue={checkedValue}
								setCheckedValue={setCheckedValue}
								label={e as never}
							/>
						</div>
					)}
					<h4 className="w-full mt-5 text-lg font-semibold">
						{e.title} ({e.code}
						{e.id})
					</h4>
					<p>
						Number of Unit(s): {e.numberOfUnits} unit
						{e.numberOfUnits > 1 ? 's' : ''}
					</p>
					<p>Lecturer-in-charge: {e.lecturerInCharge}</p>
					<h4 className="w-full text-lg font-semibold">
						Pre-Requisite
					</h4>
					<p>
						{e.prerequisite && e.prerequisite.length != 0
							? e.prerequisite
							: 'None'}
					</p>
				</Card>
			))}
		</>
	);
}

export default MobileViewRegisterComponent;
