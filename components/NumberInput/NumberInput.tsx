import React, { useRef } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	ActionIcon,
	Flex,
	NumberInput as MantineNumberInput,
	NumberInputHandlers,
	NumberInputProps,
} from '@mantine/core'

type TNumberInputProps<T extends FieldValues> = NumberInputProps & {
	control: Control<T>
	name: Path<T>
}

const IGNORE_CHARACTER = ['e', 'E', '-', '+']

const NumberInput = <T extends FieldValues>({
	control,
	name,
	...rest
}: TNumberInputProps<T>) => {
	const handlers = useRef<NumberInputHandlers>()

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<MantineNumberInput
					{...field}
					{...rest}
					value={field.value ?? 0}
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
					hideControls
				/>
			)}
		/>
	)
}

export default NumberInput
