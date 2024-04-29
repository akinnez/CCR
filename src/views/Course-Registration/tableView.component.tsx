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
	setCheckedValue?: any;
	checkedValue?: any;
}) {
	const [isOpen, setOpen] = useState(false);
	const [data, setData] = useState({});

	function openCourseDescription(data: any) {
		setOpen(true);
		setData(data);
	}
	return (
		<>
			<table className="w-full">
				<thead>
					{!isPreview && <th className="py-5"></th>}
					{isPreview && <th className="py-5">S/N</th>}
					<th>Course Code</th>
					<th>Course Title</th>
					<th>Units</th>
					<th>Status</th>
					<th>Pre-Requisite</th>
				</thead>
				<tbody>
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
								{isPreview && (
									<td className="text-center">{i + 1}</td>
								)}
								<td className="text-center">
									{e.course_id}
									{e.code}
								</td>
								<td>
									<span
										onClick={() => openCourseDescription(e)}
										title="View course description"
										className="cursor-pointer hover:underline"
									>
										{e.title}
									</span>
								</td>
								<td className="text-center">{e.units}</td>
								<td className="text-center">
									{e.isOptional ? 'Elective' : 'Compulsory'}
								</td>
								<td className="text-center">
									{e.prerequisite}
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
