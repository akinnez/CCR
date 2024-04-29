'use client';

import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {Button} from '@/components/ui/button';
import {dataValues} from '../../../environtment';

function CourseRegComponent({
	successFunction,
	formList,
}: {
	successFunction?: any;
	formList?: any;
}) {
	useEffect(() => {
		let getBody: HTMLDivElement = document.getElementById(
			'body'
		) as HTMLDivElement;
		const width = new ResizeObserver((event) => {
			event.forEach((e) => {
				if (e.contentBoxSize[0].inlineSize <= 750) {
					setTableShow(false);
					setMobileShow(true);
					return;
				}
				setTableShow(true);
				setMobileShow(false);
			});
		});
		width.observe(getBody);
	}, []);
	const [checkedValue, setCheckedValue] = useState([]);
	const [isTableShow, setTableShow] = useState(false);
	const [isMobileShow, setMobileShow] = useState(false);
	const user = JSON.parse(sessionStorage.getItem(dataValues) as string);
	const getCourse = JSON.parse(sessionStorage.getItem('setCourse') as string);
	const TableViewComponent = dynamic(
		() => import('@/views/Course-Registration/tableView.component'),
		{ssr: false, loading: () => <>Loading...</>}
	);
	const MobileViewRegisterComponent = dynamic(
		() => import('@/views/Course-Registration/mobileView.component'),
		{ssr: false, loading: () => <>Loading...</>}
	);
	return (
		<>
			<div id="body">
				<div>
					<h1 className="text-2xl lg:text-4xl text-center font-semibold lg:font-bold my-5">
						Course Registration
					</h1>
					<p className="font-semibold lg:text-lg">
						Welcome {user.payload.first_name}{' '}
						{user.payload.last_name},{' '}
					</p>
					<p className="font-semibold lg:text-lg">
						Faculty: {user.payload.faculty},{' '}
					</p>
					<p className="font-semibold lg:text-lg">
						Department: {user.payload.department}
					</p>
				</div>
				<div className="my-5">
					<h3 className="font-bold text-lg text-center">
						Course Registration for {new Date().getFullYear()}/
						{new Date().getFullYear() + 1} Academic Session
					</h3>
				</div>
				<div className="">
					<form
						onSubmit={(e) => successFunction(e, checkedValue)}
						className="space-y-5"
					>
						<div className={`md:block hidden`}>
							{isTableShow && (
								<>
									<h1 className="capitalize text-md font-semibold text-center">
										First semester
									</h1>
									<TableViewComponent
										course={getCourse.first}
										checkedValue={checkedValue}
										setCheckedValue={setCheckedValue}
									/>
									<h1 className="capitalize text-md font-semibold text-center mt-5 mb-3">
										second semester
									</h1>
									<TableViewComponent
										course={getCourse.second}
										checkedValue={checkedValue}
										setCheckedValue={setCheckedValue}
									/>
								</>
							)}
						</div>
						<div className={`md:hidden block`}>
							{isMobileShow && (
								<>
									<h1 className="capitalize text-md font-semibold text-center">
										First semester
									</h1>
									<MobileViewRegisterComponent
										formList={getCourse.first}
										checkedValue={checkedValue}
										setCheckedValue={setCheckedValue}
									/>
									<h1 className="capitalize text-md font-semibold text-center mt-5 mb-3">
										second semester
									</h1>
									<MobileViewRegisterComponent
										formList={getCourse.second}
										checkedValue={checkedValue}
										setCheckedValue={setCheckedValue}
									/>
								</>
							)}
						</div>

						<div className="py-2 text-center">
							<Button className="text-lg" size={'lg'}>
								Submit
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CourseRegComponent;
