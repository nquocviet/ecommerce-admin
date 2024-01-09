import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, Text } from '@mantine/core'

import { SwitchGroup } from '@/components'

const PriceConfiguration = () => {
	const { control } = useFormContext()

	return (
		<Flex direction="column" align="stretch" gap={20}>
			<Text className="text-sm text-gray-500">
				The price overrides apply from the time you hit the publish button and
				forever if left untouched.
			</Text>
			<SwitchGroup
				name="override_start_date"
				control={control}
				title="Price overrides has a start date?"
				description="Schedule the price overrides to activate in the future."
			/>
			<SwitchGroup
				name="override_end_date"
				control={control}
				title="Price overrides has an expiry date?"
				description="Schedule the price overrides to deactivate in the future."
			/>
			<SwitchGroup
				name="override_customer_groups"
				control={control}
				title="Customer availability"
				description="Specific which customer groups the price overrides should apply for."
			/>
		</Flex>
	)
}

export default PriceConfiguration
