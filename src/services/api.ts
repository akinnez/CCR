import axios, {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';
import {LoginValues} from '../../environtment';

export const api = axios.create();

api.interceptors.request.use((config) => {
	const token = JSON.parse(
		sessionStorage.getItem(LoginValues) as string
	)?.token;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export const get = <T>(url: string): Observable<AxiosResponse<T>> => {
	return new Observable((observer) => {
		api.get<T>(url)
			.then((response) => {
				observer.next(response);
				observer.complete();
			})
			.catch((error) => {
				observer.error(error);
			});
	});
};
export const post = <T>(
	url: string,
	data: object | [] | Array<object>
): Observable<AxiosResponse<T>> => {
	return new Observable((observer) => {
		api.post<T>(url, data)
			.then((response) => {
				observer.next(response);
				observer.complete();
			})
			.catch((error) => {
				observer.error(error);
			});
	});
};
