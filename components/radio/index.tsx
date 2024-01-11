import { ReactNode } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	Flex,
	Radio as MantineRadio,
	RadioProps as MantineRadioProps,
} from '@mantine/core'

interface RadioProps<T extends FieldValues> extends MantineRadioProps {
	control: Control<T>
	name: Path<T>
	rightIcon?: ReactNode
}

const Radio = <T extends FieldValues>({
	control,
	name,
	rightIcon,
	...rest
}: RadioProps<T>) => {
	return (
		<Flex align="center" gap={8}>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<MantineRadio
						{...field}
						{...rest}
						checked={field.value === rest.value ?? false}
					/>
				)}
			/>
			{rightIcon && rightIcon}
		</Flex>
	)
}

export default Radio
