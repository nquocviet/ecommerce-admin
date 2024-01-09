import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, MultiSelect } from '@mantine/core'
import { Clock, MapPin, Users } from '@phosphor-icons/react'

import { DatePickerInput, Select, Textarea, TextInput } from '@/components'
import {
	HOUR_MINUTE_OPTIONS,
	SYSTEM_LOCATION_OPTIONS,
	SYSTEM_USER_OPTIONS,
} from '@/constants/common'

const FormNewEvent = () => {
	const { control } = useFormContext()

	return (
		<Flex direction="column" align="stretch" gap={20} className="pt-2">
			<TextInput
				name="title"
				control={control}
				size="md"
				placeholder="Add title..."
			/>
			<Flex align="center">
				<Clock size={20} className="mr-2" />
				<Flex align="center" gap={4}>
					<DatePickerInput
						name="date"
						control={control}
						size="xs"
						weekendDays={[]}
						styles={() => ({
							input: {
								height: '2.125rem',
								fontSize: '0.875rem',
							},
						})}
						minDate={new Date()}
					/>
					<Select
						name="start_time"
						control={control}
						data={HOUR_MINUTE_OPTIONS}
						maxDropdownHeight={240}
						styles={() => ({
							input: {
								width: '5.5rem',
								fontSize: '0.875rem',
								paddingLeft: 'calc(1.875rem / 3)',
								paddingRight: 'calc(1.875rem / 3)',
							},
							dropdown: {
								width: '200px !important',
							},
							rightSection: {
								display: 'none',
							},
						})}
						clearable
					/>
					<span>-</span>
					<Select
						name="end_time"
						control={control}
						data={HOUR_MINUTE_OPTIONS}
						maxDropdownHeight={240}
						styles={() => ({
							input: {
								width: '5.5rem',
								fontSize: '0.875rem',
								paddingLeft: 'calc(1.875rem / 3)',
								paddingRight: 'calc(1.875rem / 3)',
							},
							dropdown: {
								width: '200px !important',
							},
							rightSection: {
								display: 'none',
							},
						})}
						clearable
					/>
				</Flex>
			</Flex>
			<Flex align="center">
				<Users size={20} className="mr-2" />
				<MultiSelect
					data={SYSTEM_USER_OPTIONS}
					value={[]}
					placeholder="Add guests..."
					className="w-full"
					maxDropdownHeight={160}
					styles={() => ({
						input: {
							fontSize: '0.875rem',
							paddingLeft: 'calc(1.875rem / 3)',
							paddingRight: 'calc(1.875rem / 3)',
						},
					})}
					searchable
					clearable
				/>
			</Flex>
			<Flex align="center">
				<MapPin size={20} className="mr-2" />
				<Select
					name="location"
					control={control}
					data={SYSTEM_LOCATION_OPTIONS}
					placeholder="Add location..."
					className="w-full"
					maxDropdownHeight={160}
					styles={() => ({
						input: {
							fontSize: '0.875rem',
							paddingLeft: 'calc(1.875rem / 3)',
							paddingRight: 'calc(1.875rem / 3)',
						},
					})}
					clearable
				/>
			</Flex>
			<Textarea
				name="description"
				control={control}
				label="Description"
				placeholder="Describe something about this meeting..."
				minRows={6}
			/>
		</Flex>
	)
}

export default FormNewEvent
