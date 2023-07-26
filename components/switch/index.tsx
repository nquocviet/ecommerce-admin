import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	Switch as MantineSwitch,
	SwitchProps as MantineSwitchProps,
} from '@mantine/core'

export interface SwitchProps<T extends FieldValues> extends MantineSwitchProps {
	control: Control<T>
	name: Path<T>
}

const Switch = <T extends FieldValues>({
	control,
	name,
	...rest
}: SwitchProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<MantineSwitch {...field} {...rest} checked={field.value ?? false} />
			)}
		/>
	)
}

export default Switch
