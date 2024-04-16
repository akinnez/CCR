export interface IResponse {
	message: string;
	statusCode: number;
	total_data?: number;
	payload?: object | [] | Array<object> | string | null;
}
