import {useEffect, useState} from 'react';
import {get, post} from '@/services/api';
import {AxiosResponse} from 'axios';
import {Subscription} from 'rxjs';

export const useGetApi = <T>(url: string): [T | any, boolean, Error | null] => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const subscription = get<T>(url).subscribe({
			next: (response: AxiosResponse<T>) => {
				setData(response.data);
				setLoading(false);
			},
			error: (err: Error) => {
				setError(err);
				setLoading(false);
			},
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [url]);

	return [data, loading, error];
};
