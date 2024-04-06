import {restrictCharacter} from '@/utils/restrictCharacter.util';

export const LoginForm = [
	{
		name: 'studentID',
		label: 'StudentID',
		props: {
			placeholder: new Date().getFullYear() + '1517',
			maxLength: 8,
			onKeyDown: (e: any) => restrictCharacter(e),
		},
	},
	{
		name: 'password',
		label: 'Password',
		props: {type: 'password', placeholder: '********'},
	},
];

export const AccountCreationForm = [
	{
		name: 'studentID',
		label: 'StudentID',
		props: {
			placeholder: new Date().getFullYear() + '1517',
			maxLength: 8,
			onKeyDown: (e: any) => restrictCharacter(e),
		},
	},
	{
		name: 'first_name',
		label: 'First Name',
		props: {
			placeholder: 'John',
			minLength: 2,
		},
	},
	{
		name: 'last_name',
		label: 'Last Name',
		props: {
			placeholder: 'Doe',
			minLength: 2,
		},
	},
	{
		name: 'phone_number',
		label: 'Phone Number',
		props: {
			minLength: 7,
			onKeyDown: (e: any) => restrictCharacter(e),
		},
	},
	{
		name: 'password',
		label: 'Password',
		props: {type: 'password', placeholder: '********'},
	},
];

export const ResultCheckerForm = [
	{
		name: 'studentID',
		label: 'StudentID',
		props: {
			placeholder: new Date().getFullYear() + '1517',
			maxLength: 8,
			onKeyDown: (e: any) => restrictCharacter(e),
		},
	},
	{
		name: 'level',
		label: 'Level',
		props: {
			maxLength: 3,
			onKeyDown: (e: any) => restrictCharacter(e),
		},
	},
	{
		name: 'password',
		label: 'Password',
		props: {type: 'password', placeholder: '********'},
	},
];

export const courses = [
	{
		semester: 'first',
		courses: [
			{
				id: 101,
				code: 'MTS',
				semester: 'first',
				title: 'Introduction to elementary mathematics',
				numberOfUnits: 3,
				lecturerInCharge: 'Mr. Orunmooru',
				prerequisite: [],
			},
			{
				id: 103,
				code: 'MTS',
				semester: 'first',
				title: 'Introduction to elementary and psycological mathematics and physical entanglement',
				numberOfUnits: 3,
				lecturerInCharge: 'Mr. Orunmooru O. J',
				prerequisite: ['MTS110, MTS 221'],
			},
		],
	},
	{
		semester: 'second',
		courses: [
			{
				id: 102,
				code: 'MTS',
				semester: 'second',
				title: 'Introduction to elementary mathematics',
				numberOfUnits: 3,
				lecturerInCharge: 'Mr. Orunmooru',
				prerequisite: [],
			},
			{
				id: 104,
				code: 'MTS',
				semester: 'second',
				title: 'Introduction to elementary mathematics',
				numberOfUnits: 3,
				lecturerInCharge: 'Mr. Orunmooru',
				prerequisite: ['MTS110, MTS 221'],
			},
		],
	},
];
