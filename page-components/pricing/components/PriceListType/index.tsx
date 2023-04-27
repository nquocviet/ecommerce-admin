import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import { RadioBox, RadioGroup } from '@/components'

const PriceListType = () => {
	const { control, watch } = useFormContext()
	const typeSelected = watch('type')

	return (
		<Flex direction="column" gap={20}>
			<Text className="text-sm text-gray-600">
				Select the type of the price list
			</Text>
			<RadioGroup control={control} name="type">
				<Grid>
					<Grid.Col span={6}>
						<RadioBox
							value="sale"
							valueSelected={typeSelected}
							label="Sale"
							description="Use this if you are creating prices for a sale."
							truncate
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<RadioBox
							value="override"
							valueSelected={typeSelected}
							label="Override"
							description="Use this to override prices."
							truncate
						/>
					</Grid.Col>
				</Grid>
			</RadioGroup>
		</Flex>
	)
}

export default PriceListType
