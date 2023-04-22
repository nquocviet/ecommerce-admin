import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Input, InputProps } from '@mantine/core'
import { MagnifyingGlass } from '@phosphor-icons/react'

type TInputSearchProps<T extends FieldValues> = InputProps & {
	control: Control<T>
	name: Path<T>
	placeholder?: string
}

const InputSearch = <T extends FieldValues>({
	control,
	name,
	placeholder = 'Search',
	icon,
	...rest
}: TInputSearchProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<Input
					placeholder={placeholder}
					icon={icon || <MagnifyingGlass size={18} />}
					styles={{
						input: {
							width: 120,
							borderColor: 'var(--gray-300)',
							transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
							'&:focus': {
								width: 240,
								boxShadow: '0 0 0 4px var(--primary-100)',
							},
						},
					}}
					{...field}
					{...rest}
				/>
			)}
		/>
	)
}

export default InputSearch
