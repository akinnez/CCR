'use client';

import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

import {Button} from '@/components/ui/button';
import getValueName from '@/utils/getUsername.util';

function CourseRegComponent({
	successFunction,
	formList,
	isPreview,
}: {
	isPreview?: boolean;
	successFunction?: any;
	formList: any;
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
					<p>Welcome {getValueName()}, </p>
					<p>College: Agriculture Science, </p>
					<p>Department: Aquaculture and fishery management</p>
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
									{formList.map((e: any, i: number) => (
										<div className="my-5" key={i}>
											<h1 className="capitalize text-md font-semibold">
												{e.semester} semester
											</h1>
											<TableViewComponent
												isPreview={isPreview}
												key={i}
												course={e.courses}
												checkedValue={checkedValue}
												setCheckedValue={
													!isPreview &&
													setCheckedValue
												}
											/>
										</div>
									))}
								</>
							)}
						</div>
						<div className={`md:hidden block`}>
							{isMobileShow && (
								<>
									{formList.map((e: any, i: number) => (
										<div className="my-5" key={i}>
											<h1 className="capitalize text-md font-semibold">
												{e.semester} semester
											</h1>
											<MobileViewRegisterComponent
												formList={e.courses}
												checkedValue={checkedValue}
												setCheckedValue={
													setCheckedValue
												}
											/>
										</div>
									))}
								</>
							)}
						</div>

						<div className="py-2">
							<Button className="text-lg" size={'lg'}>
								Preview
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CourseRegComponent;
