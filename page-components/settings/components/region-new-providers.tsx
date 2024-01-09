import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Grid, Text } from '@mantine/core'

import { Select } from '@/components'

const RegionNewProviders = () => {
	const { control } = useFormContext()

	return (
		<div className="text-sm text-gray-500">
			<Text>
				Add which fulfillment and payment providers should be available in this
				region.
			</Text>
			<Grid className="mt-6">
				<Grid.Col xs={6}>
					<Select
						name="payment"
						control={control}
						label="Payment providers"
						placeholder="Choose payment providers"
						data={[]}
						required
					/>
				</Grid.Col>
				<Grid.Col xs={6}>
					<Select
						name="fulfillment"
						control={control}
						label="Fulfillment providers"
						placeholder="Choose fulfillment providers"
						data={[]}
						required
					/>
				</Grid.Col>
			</Grid>
		</div>
	)
}

export default RegionNewProviders
