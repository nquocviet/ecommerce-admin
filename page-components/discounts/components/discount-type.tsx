import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Grid } from '@mantine/core'

import { RadioBox, RadioGroup } from '@/components'

const DiscountType = () => {
	const { control, watch } = useFormContext()
	const typeSelected = watch('type')

	return (
		<RadioGroup control={control} name="type">
			<Grid>
				<Grid.Col span={4}>
					<RadioBox
						value="percentage"
						valueSelected={typeSelected}
						label="Percentage"
						description="Discount applied in %"
						truncate
					/>
				</Grid.Col>
				<Grid.Col span={4}>
					<RadioBox
						value="fixed"
						valueSelected={typeSelected}
						label="Fixed amount"
						description="Discount in whole numbers"
						truncate
					/>
				</Grid.Col>
				<Grid.Col span={4}>
					<RadioBox
						value="free_shipping"
						valueSelected={typeSelected}
						label="Free shipping"
						description="Override delivery amount"
						truncate
					/>
				</Grid.Col>
			</Grid>
		</RadioGroup>
	)
}

export default DiscountType
