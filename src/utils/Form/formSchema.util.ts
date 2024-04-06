import {z} from 'zod';

export const LoginformSchema = z.object({
	studentID: z.string().min(8, 'StudentID field must be 8 characters').trim(),
	password: z
		.string()
		.min(8, 'Password field must be more than 8 characters')
		.trim(),
});
export const accCreationformSchema = z.object({
	courses: z.string(),
	department: z.string(),
	studentID: z.string().min(8, 'Please, Enter a valid StudentID').trim(),
	first_name: z.string().min(2, 'Please, Enter a valid Name').trim(),
	last_name: z.string().min(2, 'Please, Enter a valid Name').trim(),
	phone_number: z
		.string()
		.min(7, 'Please, Enter a valid phone number')
		.trim(),
	password: z
		.string()
		.min(8, 'Password field must be more than 8 characters')
		.trim(),
});
export const resultCheckerformSchema = z.object({
	studentID: z.string().min(8, 'Please, Enter a valid StudentID').trim(),
	level: z.string().min(3, 'Please, Enter a valid level').trim(),
	password: z
		.string()
		.min(8, 'Password field must be more than 8 characters')
		.trim(),
});

export const registerFormSchema = z.object({
	courses: z.array(z.string()).refine((value) => value.some((item) => item)),
	// courses: z
	// 	.array(
	// 		z.object({
	// 			id: z.string(),
	// 			title: z.string(),
	// 			numberOfUnits: z.number(),
	// 			lecturerInCharge: z.string(),
	// 		})
	// 	)
	// 	.refine((value) => value.some((item) => item.id)),
});
