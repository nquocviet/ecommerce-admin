import { useCallback } from 'react'
import { FieldValues } from 'react-hook-form'
import { AnyObjectSchema, ValidationError } from 'yup'

const useYupValidationResolver = <TFieldValues extends FieldValues>(
	validationSchema: AnyObjectSchema
) => {
	return useCallback(
		async (data: TFieldValues) => {
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false,
				})

				return {
					values,
					errors: {},
				}
			} catch (errors) {
				if (errors instanceof ValidationError) {
					return {
						values: {},
						errors: errors.inner.reduce(
							(previous, current) => ({
								...previous,
								...(current.path && { [current.path]: current.message }),
							}),
							{}
						),
					}
				}
			}
		},
		[validationSchema]
	)
}

export default useYupValidationResolver
