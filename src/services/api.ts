import axios, {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';

export const api = axios.create();

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
