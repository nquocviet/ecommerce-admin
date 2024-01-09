import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Collapse, Flex, Text } from '@mantine/core'

import { DateTimePicker, NumberInput, SwitchGroup } from '@/components'

const DiscountConfiguration = () => {
	const { control, watch } = useFormContext()
	const [startDate, expiryDate, limitRedemptions] = watch([
		'start_date',
		'expiry_date',
		'limit_redemptions',
	])

	return (
		<Flex direction="column" align="stretch" gap={20}>
			<Text className="text-sm text-gray-500">
				Discount code applies from you hit the publish button and forever if
				left untouched.
			</Text>
			<SwitchGroup
				name="start_date"
				control={control}
				title="Start date"
				description="Schedule the discount to activate in the future."
				hint="If you want to schedule the discount to activate in the future, you can set a start date here, otherwise the discount will be active immediately."
				hintProps={{
					width: 240,
				}}
			/>
			<Collapse in={startDate}>
				<DateTimePicker
					name="start_date_time"
					control={control}
					label="Start datetime"
				/>
			</Collapse>
			<SwitchGroup
				name="expiry_date"
				control={control}
				title="Discount has an expiry date?"
				description="Schedule the discount to deactivate in the future."
				hint="If you want to schedule the discount to deactivate in the future, you can set an expiry date here."
				hintProps={{
					width: 240,
				}}
			/>
			<Collapse in={expiryDate}>
				<DateTimePicker
					name="expiry_date_time"
					control={control}
					label="Expiry datetime"
				/>
			</Collapse>
			<SwitchGroup
				name="limit_redemptions"
				control={control}
				title="Limit the number of redemptions?"
				description="Limit applies across all customers, not per customer."
				hint="If you wish to limit the amount of times a customer can redeem this discount, you can set a limit here."
				hintProps={{
					width: 240,
				}}
			/>
			<Collapse in={limitRedemptions}>
				<NumberInput
					name="number_of_redemptions"
					control={control}
					label="Number of redemptions"
					placeholder="5"
				/>
			</Collapse>
		</Flex>
	)
}

export default DiscountConfiguration
