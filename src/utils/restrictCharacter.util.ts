export const restrictCharacter = (event: any) => {
	if (event.target.value.length > -1 && event.keyCode != 8) {
		let regex = /^[0-9._\b]+$/;
		let key = String.fromCharCode(
			!event.charCode ? event.which : event.charCode
		);
		if (!regex.test(key)) {
			return event.preventDefault();
		}
	}
};
