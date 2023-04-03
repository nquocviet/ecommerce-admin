import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Select as MantineSelect, SelectProps } from '@mantine/core'

type TSelectProps<T extends FieldValues> = SelectProps & {
	control: Control<T>
	name: Path<T>
}

const Select = <T extends FieldValues>({
	control,
	name,
	...rest
}: TSelectProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <MantineSelect {...field} {...rest} />}
		/>
	)
}

export default Select
