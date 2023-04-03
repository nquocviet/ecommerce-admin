import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { TextInput as MantineTextInput, TextInputProps } from '@mantine/core'

type TTextInputProps<T extends FieldValues> = TextInputProps & {
	control: Control<T>
	name: Path<T>
}

const TextInput = <T extends FieldValues>({
	control,
	name,
	...rest
}: TTextInputProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <MantineTextInput {...field} {...rest} />}
		/>
	)
}

export default TextInput
