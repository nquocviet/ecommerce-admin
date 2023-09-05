import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	Select as MantineSelect,
	SelectProps as MantineSelectProps,
} from '@mantine/core'

interface SelectProps<T extends FieldValues> extends MantineSelectProps {
	control: Control<T>
	name: Path<T>
}

const Select = <T extends FieldValues>({
	control,
	name,
	...rest
}: SelectProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineSelect {...field} {...rest} error={error?.message} />
			)}
		/>
	)
}

export default Select
