import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Textarea as MantineTextarea, TextareaProps } from '@mantine/core'

type TTextareaProps<T extends FieldValues> = TextareaProps & {
	control: Control<T>
	name: Path<T>
}

const Textarea = <T extends FieldValues>({
	control,
	name,
	...rest
}: TTextareaProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<MantineTextarea {...field} {...rest} value={field.value ?? ''} />
			)}
		/>
	)
}

export default Textarea
