import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	DateTimePicker as MantineDateTimePicker,
	DateTimePickerProps as MantineDateTimePickerProps,
} from '@mantine/dates'

export interface DateTimePickerProps<T extends FieldValues>
	extends MantineDateTimePickerProps {
	control: Control<T>
	name: Path<T>
}

const DateTimePicker = <T extends FieldValues>({
	control,
	name,
	...rest
}: DateTimePickerProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <MantineDateTimePicker {...field} {...rest} />}
		/>
	)
}

export default DateTimePicker
