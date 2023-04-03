import React, { ReactNode } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Checkbox as MantineCheckbox, CheckboxProps, Flex } from '@mantine/core'

type TCheckboxProps<T extends FieldValues> = CheckboxProps & {
	control: Control<T>
	name: Path<T>
	rightIcon?: ReactNode
}

const Checkbox = <T extends FieldValues>({
	control,
	name,
	rightIcon,
	...rest
}: TCheckboxProps<T>) => {
	return (
		<Flex align="center" gap={8}>
			<Controller
				control={control}
				name={name}
				render={({ field }) => <MantineCheckbox {...rest} {...field} />}
			/>
			{rightIcon && rightIcon}
		</Flex>
	)
}

export default Checkbox
