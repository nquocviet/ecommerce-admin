import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	Radio as MantineRadio,
	RadioGroupProps as MantineRadioGroupProps,
} from '@mantine/core'

interface RadioGroupProps<T extends FieldValues>
	extends MantineRadioGroupProps {
	control: Control<T>
	name: Path<T>
}

const RadioGroup = <T extends FieldValues>({
	control,
	name,
	...rest
}: RadioGroupProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <MantineRadio.Group {...field} {...rest} />}
		/>
	)
}

export default RadioGroup
