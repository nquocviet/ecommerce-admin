import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	PasswordInput as MantinePasswordInput,
	PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core'
import { Eye, EyeSlash } from '@phosphor-icons/react'

interface PasswordInputProps<T extends FieldValues>
	extends MantinePasswordInputProps {
	control: Control<T>
	name: Path<T>
}

const PasswordInput = <T extends FieldValues>({
	control,
	name,
	...rest
}: PasswordInputProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantinePasswordInput
					{...field}
					{...rest}
					error={error?.message}
					visibilityToggleIcon={({ reveal }) =>
						reveal ? <Eye size={20} /> : <EyeSlash size={20} />
					}
				/>
			)}
		/>
	)
}

export default PasswordInput
