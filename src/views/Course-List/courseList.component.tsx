'use client';
import {useGetApi} from '@/hooks/useApi';
import {ToObservable} from '@/services/toObservable';
import {filter, find} from 'rxjs';
import {dataValues} from '../../../environtment';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';
import {checkLevels} from '@/utils/checkLevels.util';

const TableViewComponent = dynamic(
	() => import('@/views/Course-Registration/tableView.component'),
	{ssr: false, loading: () => <>Loading...</>}
);
const MobileViewRegisterComponent = dynamic(
	() => import('@/views/Course-Registration/mobileView.component'),
	{ssr: false, loading: () => <>Loading...</>}
);

function CourseListComponent() {
	let dept: any;
	let level: any;
	let first_semester: any = [];
	let second_semester: any = [];
	let total = 0;
	let stotal = 0;

	const [isTableShow, setTableShow] = useState(false);
	const [isMobileShow, setMobileShow] = useState(false);
	const user = JSON.parse(sessionStorage.getItem(dataValues) as string);
	const [data] = useGetApi('/data/courses.json');
	const [datas] = useGetApi('/data/department.json');

	if (data && datas) {
		level = checkLevels(user.payload.studentId);
		const ss = ToObservable(data)
			.pipe(find((e) => e.name == user.payload.faculty))
			.subscribe({
				next: (res) => {
					const department = res.departments.find(
						(e: any) => e.name == user.payload.department
					);

					dept = department;
				},
			});

		const getSessionCourse = datas?.filter(
			(e: any) =>
				e.departmentOffering.includes(dept?.sCode) &&
				e.code < level + 100 &&
				e.code > level
		);
		const first = ToObservable(getSessionCourse)
			.pipe(filter((e) => e.semester == 'first'))
			.subscribe({
				next: (res) => {
					if (res) {
						total += res.units;
						first_semester.push(res);
					}
				},
			});
		const second = ToObservable(getSessionCourse)
			.pipe(filter((e) => e.semester == 'second'))
			.subscribe({
				next: (res) => {
					if (res) {
						stotal += res.units;
						second_semester.push(res);
					}
				},
			});
		sessionStorage.setItem(
			'setCourse',
			JSON.stringify({
				first: first_semester,
				second: second_semester,
			})
		);
		first.unsubscribe();
		second.unsubscribe();
		ss.unsubscribe();
	}

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

	return (
		<>
			<div id="body">
				<section
					className="lg:h-[350px] lg:bg-primary lg:text-white flex justify-center items-center my-5 lg:my-0"
					style={{borderRadius: '0 0 10% 10%'}}
				>
					<div>
						<h1 className="text-xl lg:text-3xl">
							List of courses for {new Date().getFullYear()}/
							{new Date().getFullYear() + 1} Academic Session
						</h1>
						<p className="my-3 text-normal lg:text-lg">
							Faculty of {user.payload.faculty}
						</p>
						<p className="text-normal lg:text-lg">
							Department of {user.payload.department}
						</p>
					</div>
				</section>
				{isTableShow && (
					<>
						<section className="my-5">
							<p className="text-center text-xl font-semibold">
								First Semester
							</p>
							<div className="w-3/4 mx-auto">
								<TableViewComponent
									isPreview={true}
									course={first_semester}
								/>
								<p className="my-5 font-semibold">
									Total Credit units {total}{' '}
								</p>
							</div>
						</section>
						<section className="my-5">
							<p className="text-center text-xl font-semibold">
								Second Semester
							</p>
							<div className="w-3/4 mx-auto">
								<TableViewComponent
									isPreview={true}
									course={second_semester}
								/>
								<p className="my-5 font-semibold">
									Total Credit units {stotal}{' '}
								</p>
							</div>
						</section>
					</>
				)}
				{isMobileShow && (
					<>
						<section className="my-5">
							<p className="text-center text-xl font-semibold">
								First Semester
							</p>
							<div className="">
								<MobileViewRegisterComponent
									isPreview={true}
									formList={first_semester}
								/>
								<p className="my-5 font-semibold">
									Total Credit units {total}{' '}
								</p>
							</div>
						</section>
						<section className="my-5">
							<p className="text-center text-xl font-semibold">
								Second Semester
							</p>
							<div className="">
								<MobileViewRegisterComponent
									isPreview={true}
									formList={second_semester}
								/>
								<p className="my-5 font-semibold">
									Total Credit units {stotal}{' '}
								</p>
							</div>
						</section>
					</>
				)}

				<section className="fixed bottom-0 right-0 flex justify-end w-full">
					<Link href={'course-reg/register'}>
						<Button size={'lg'} className="m-5">
							Register
						</Button>
					</Link>
				</section>
			</div>
		</>
	);
}

export default CourseListComponent;
