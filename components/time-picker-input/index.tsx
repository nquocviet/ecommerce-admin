import React, { useRef } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { ActionIcon } from '@mantine/core'
import { TimeInput, TimeInputProps } from '@mantine/dates'
import { Clock } from '@phosphor-icons/react'

export interface TimePickerInputProps<T extends FieldValues>
	extends TimeInputProps {
	control: Control<T>
	name: Path<T>
}

const TimePickerInput = <T extends FieldValues>({
	control,
	name,
	...rest
}: TimePickerInputProps<T>) => {
	const ref = useRef<HTMLInputElement>(null)

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<TimeInput
					{...field}
					{...rest}
					error={error?.message}
					ref={ref}
					rightSection={
						<ActionIcon onClick={() => ref.current?.showPicker()}>
							<Clock size={16} />
						</ActionIcon>
					}
				/>
			)}
		/>
	)
}

export default TimePickerInput
