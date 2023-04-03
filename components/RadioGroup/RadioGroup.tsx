import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Radio as MantineRadio, RadioGroupProps } from '@mantine/core'

type TRadioGroupProps<T extends FieldValues> = RadioGroupProps & {
	control: Control<T>
	name: Path<T>
}

const RadioGroup = <T extends FieldValues>({
	control,
	name,
	...rest
}: TRadioGroupProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <MantineRadio.Group {...rest} {...field} />}
		/>
	)
}

export default RadioGroup
