import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	MultiSelect as MantineMultiSelect,
	MultiSelectProps as MantineMultiSelectProps,
} from '@mantine/core'

export interface MultiSelectProps<T extends FieldValues>
	extends MantineMultiSelectProps {
	control: Control<T>
	name: Path<T>
}

const MultiSelect = <T extends FieldValues>({
	control,
	name,
	...rest
}: MultiSelectProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineMultiSelect {...field} {...rest} error={error?.message} />
			)}
		/>
	)
}

export default MultiSelect
