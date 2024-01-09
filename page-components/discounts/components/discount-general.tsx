import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Grid, Text, Tooltip } from '@mantine/core'
import { Info } from '@phosphor-icons/react'

import { Checkbox, NumberInput, Select, TextInput } from '@/components'

const DiscountGeneral = () => {
	const { control } = useFormContext()

	return (
		<Grid>
			<Grid.Col span={12}>
				<Select
					name="region"
					control={control}
					data={[
						{ label: 'EU', value: 'eu' },
						{ label: 'NA', value: 'na' },
					]}
					label="Choose valid regions"
					placeholder="Select region..."
					required
				/>
			</Grid.Col>
			<Grid.Col sm={6}>
				<TextInput
					name="code"
					control={control}
					label="Code"
					placeholder="SUMMERSALE10"
					required
				/>
			</Grid.Col>
			<Grid.Col sm={6}>
				<NumberInput
					name="percentage"
					control={control}
					label="Percentage"
					placeholder="10"
					textIcon="%"
					required
				/>
			</Grid.Col>
			<Grid.Col span={12}>
				<Text className="text-sm text-gray-500">
					The code your customers will enter during checkout. This will appear
					on your customer’s invoice. Uppercase letters and numbers only.
				</Text>
			</Grid.Col>
			<Grid.Col span={12}>
				<TextInput
					name="description"
					control={control}
					label="Description"
					placeholder="Summer Sale 2023..."
					required
				/>
			</Grid.Col>
			<Grid.Col span={12}>
				<Checkbox
					name="template_discount"
					control={control}
					label="This is a template discount"
					rightIcon={
						<Tooltip
							label="Template discounts allow you to define a set of rules that can be used across a group of discounts. This is useful in campaigns that should generate unique codes for each user, but where the rules for all unique codes should be the same."
							width={240}
							multiline
						>
							<Info size={16} className="text-gray-500" />
						</Tooltip>
					}
				/>
			</Grid.Col>
		</Grid>
	)
}

export default DiscountGeneral
