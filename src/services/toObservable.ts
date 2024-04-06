import {Observable, from} from 'rxjs';

export function ToObservable(value: any): Observable<any> {
	return from(value);
}
