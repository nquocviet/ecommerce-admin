import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	DatePickerInput as MantineDatePickerInput,
	DatePickerInputProps as MantineDatePickerInputProps,
} from '@mantine/dates'

export interface DatePickerInputProps<T extends FieldValues>
	extends MantineDatePickerInputProps {
	control: Control<T>
	name: Path<T>
}

const DatePickerInput = <T extends FieldValues>({
	control,
	name,
	...rest
}: DatePickerInputProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineDatePickerInput {...field} {...rest} error={error?.message} />
			)}
		/>
	)
}

export default DatePickerInput
