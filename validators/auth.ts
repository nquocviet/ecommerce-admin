import { object, ref, string } from 'yup'

import { MAX_LENGTH_255, MIN_LENGTH_8 } from '@/constants/validation'

export const schema = {
	login: object({
		email: string()
			.max(
				MAX_LENGTH_255,
				`Email must be shorter than or equal to ${MAX_LENGTH_255} characters`
			)
			.required('Email should not be empty'),
		password: string()
			.max(
				MAX_LENGTH_255,
				`Password must be shorter than or equal to ${MAX_LENGTH_255} characters`
			)
			.required('Password should not be empty'),
	}),
	register: object({
		email: string()
			.max(
				MAX_LENGTH_255,
				`Email must be shorter than or equal to ${MAX_LENGTH_255} characters`
			)
			.required('Email should not be empty'),
		password: string()
			.min(
				MIN_LENGTH_8,
				`Password must be shorter than or equal to ${MIN_LENGTH_8} characters`
			)
			.max(
				MAX_LENGTH_255,
				`Password must be shorter than or equal to ${MAX_LENGTH_255} characters`
			)
			.required('Password should not be empty'),
		passwordConfirmation: string().oneOf(
			[ref('password'), ''],
			'Your passwords do not match'
		),
	}),
}
