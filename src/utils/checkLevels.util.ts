export function checkLevels(value: string) {
	let year = new Date().getFullYear();
	const matricYear = value.substring(0, 4);
	let diff = year - Number(matricYear);
	if (diff < 0) return -1;
	switch (diff) {
		case (diff = 0):
			return 100;
		case (diff = 1):
			return 200;
		case (diff = 2):
			return 300;
		case (diff = 3):
			return 400;
		case (diff = 4):
			return 500;
		default:
			break;
	}
}
