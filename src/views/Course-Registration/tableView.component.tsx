'use client';
import {useState} from 'react';
import {CheckboxFieldComponent} from '@/components/reusable/formField';
import ModalComponent from '@/components/reusable/modal.component';
import dynamic from 'next/dynamic';

const ViewCourseModal = dynamic(
	() => import('@/views/Course-Registration/view-course.modal')
);

function TableViewComponent({
	course,
	checkedValue,
	setCheckedValue,
	isPreview,
}: {
	course: any;
	isPreview?: boolean;
	setCheckedValue: any;
	checkedValue: any;
}) {
	const [isOpen, setOpen] = useState(false);
	const [data, setData] = useState({});

	function openCourseDescription(data: any) {
		setOpen(true);
		setData(data);
	}
	return (
		<>
			<table className="border w-full">
				<thead>
					{!isPreview && <th className="py-5"></th>}
					<th>Course</th>
					<th>Units</th>
					<th>Lecture-in-charge</th>
					<th>Pre-Requisite</th>
				</thead>
				<tbody className="text-center ">
					{course &&
						course.map((e: any, i: number) => (
							<tr key={i}>
								{!isPreview && (
									<td className="py-2">
										<CheckboxFieldComponent
											checkedValue={checkedValue}
											setCheckedValue={setCheckedValue}
											label={e as never}
										/>
									</td>
								)}
								<td>
									{e.code}
									{e.id} -{' '}
									<span
										onClick={() => openCourseDescription(e)}
										title="View course description"
										className="cursor-pointer"
									>
										{e.title.length > 40
											? e.title.substring(0, 40) + '...'
											: e.title}
									</span>
								</td>
								<td>{e.numberOfUnits}</td>
								<td>
									{e.lecturerInCharge.length > 20
										? e.lecturerInCharge.substring(0, 20) +
										  '...'
										: e.lecturerInCharge}
								</td>
								<td>
									{e.prerequisite &&
									e.prerequisite.length != 0
										? e.prerequisite
										: 'None'}
								</td>
							</tr>
						))}
				</tbody>
			</table>
			{isOpen && Object.keys(data).length != 0 && (
				<ModalComponent isOpen={isOpen}>
					<ViewCourseModal data={data} setOpen={setOpen} />
				</ModalComponent>
			)}
		</>
	);
}

export default TableViewComponent;
