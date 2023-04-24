import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { TextInput as MantineTextInput, TextInputProps } from '@mantine/core'

type TTextInputProps<T extends FieldValues> = TextInputProps & {
	control: Control<T>
	name: Path<T>
	textIcon?: string
}

const TextInput = <T extends FieldValues>({
	control,
	name,
	textIcon,
	...rest
}: TTextInputProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<MantineTextInput
					{...field}
					{...rest}
					value={field.value ?? ''}
					{...(textIcon && {
						icon: textIcon,
						iconWidth: 18,
						styles: {
							...rest.styles,
							icon: {
								left: 4,
								color: 'var(--gray-400)',
							},
						},
					})}
				/>
			)}
		/>
	)
}

export default TextInput
