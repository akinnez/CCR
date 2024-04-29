'use client';

import {Button} from '@/components/ui/button';
import {useGetApi} from '@/hooks/useApi';
import loginGuard from '@/services/login.guard';
import {useRouter, useParams} from 'next/navigation';
import {useEffect} from 'react';
import {toast} from 'sonner';
import {BASE_URL, LoginValues, dataValues} from '../../../environtment';
import {checkLevels} from '@/utils/checkLevels.util';

function StudentHomeComponent() {
	const route = useRouter();
	const params = useParams();
	const login = JSON.parse(sessionStorage.getItem(LoginValues) as string);

	if (loginGuard(params?.id as string)) {
		toast('Please, Log In ...');
		return route.push('/auth/login');
	}

	const [data, loading, error] = useGetApi(
		BASE_URL + `/student/single-user?studentID=${login.studentID}`
	);
	data && sessionStorage.setItem(dataValues, JSON.stringify(data));
	if (loading) {
		return <>Loading ...</>;
	}
	return (
		<>
			<div className="my-7 space-y-4 font-semibold capitalize text-lg tracking-widest">
				<h3>
					Name: {data.payload.first_name} {data.payload.last_name}
				</h3>
				<h3>Student ID No: {data.payload.studentId}</h3>
				<h3>Faculty: {data.payload.faculty}</h3>
				<h3>Department: {data.payload.department}</h3>
				<h3>Level: {checkLevels(data.payload.studentId)}</h3>
			</div>
			<div>
				<Button size={'lg'}>Edit Profile</Button>
			</div>
		</>
	);
}

export default StudentHomeComponent;
