import React, { useRef } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	ActionIcon,
	Flex,
	NumberInput as MantineNumberInput,
	NumberInputHandlers,
	NumberInputProps as MantineNumberInputProps,
} from '@mantine/core'

interface NumberInputProps<T extends FieldValues>
	extends MantineNumberInputProps {
	control: Control<T>
	name: Path<T>
	textIcon?: string
}

const IGNORE_CHARACTER = ['e', 'E', '-', '+']

const NumberInput = <T extends FieldValues>({
	control,
	name,
	textIcon,
	...rest
}: NumberInputProps<T>) => {
	const handlers = useRef<NumberInputHandlers>()

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineNumberInput
					{...field}
					{...rest}
					value={field.value}
					type="number"
					styles={() => ({
						input: {
							paddingRight: '3.25rem',
						},
					})}
					handlersRef={handlers}
					rightSection={
						<Flex>
							<ActionIcon
								size="sm"
								onClick={() => handlers.current?.decrement()}
							>
								–
							</ActionIcon>
							<ActionIcon
								size="sm"
								onClick={() => handlers.current?.increment()}
							>
								+
							</ActionIcon>
						</Flex>
					}
					rightSectionWidth={52}
					onKeyDown={(event) => {
						if (IGNORE_CHARACTER.includes(event.key)) {
							event.preventDefault()
						}
					}}
					{...(textIcon && {
						icon: textIcon,
						iconWidth: 28,
						styles: {
							...rest.styles,
							icon: {
								left: 4,
								color: 'var(--gray-400)',
								fontSize: 'var(--fs-text-sm)',
							},
						},
					})}
					error={error?.message}
					hideControls
				/>
			)}
		/>
	)
}

export default NumberInput
