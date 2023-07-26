import { ReactNode } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	Checkbox as MantineCheckbox,
	CheckboxProps as MantineCheckboxProps,
	Flex,
} from '@mantine/core'

interface CheckboxProps<T extends FieldValues> extends MantineCheckboxProps {
	control: Control<T>
	name: Path<T>
	rightIcon?: ReactNode
}

const Checkbox = <T extends FieldValues>({
	control,
	name,
	rightIcon,
	...rest
}: CheckboxProps<T>) => {
	return (
		<Flex align="center" gap={8}>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<MantineCheckbox
						{...field}
						{...rest}
						checked={field.value ?? false}
					/>
				)}
			/>
			{rightIcon && rightIcon}
		</Flex>
	)
}

export default Checkbox
