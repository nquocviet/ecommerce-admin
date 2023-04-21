import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Switch as MantineSwitch, SwitchProps } from '@mantine/core'

export type TSwitchProps<T extends FieldValues> = SwitchProps & {
	control: Control<T>
	name: Path<T>
}

const Switch = <T extends FieldValues>({
	control,
	name,
	...rest
}: TSwitchProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <MantineSwitch {...field} {...rest} />}
		/>
	)
}

export default Switch
