import {LoginValues} from '../../environtment';

function loginGuard(params?: string): boolean {
	const login = JSON.parse(sessionStorage.getItem(LoginValues) as string);

	if (!login?.token) {
		return true;
	}
	if (login?.token && login?.studentID != params) {
		sessionStorage.removeItem(LoginValues);
		return true;
	}
	return false;
}

export default loginGuard;
