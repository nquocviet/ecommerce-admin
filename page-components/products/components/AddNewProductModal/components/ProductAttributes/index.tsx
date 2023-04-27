import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import { NumberInput, Select, TextInput } from '@/components'
import { useCountries } from '@/lib/country'

const ProductAttributes = () => {
	const { control } = useFormContext()
	const { data = [] } = useCountries()
	const countries = data?.map(({ numeric: value, name: label }) => ({
		value,
		label,
	}))

	return (
		<div className="text-sm text-gray-600">
			<Text>Used for shipping and customs purposes.</Text>
			<Flex direction="column" align="stretch" gap={24} className="mt-6">
				<div>
					<Text className="mb-3 font-semibold text-black">Dimensions</Text>
					<Grid>
						<Grid.Col span={3}>
							<NumberInput
								name="width"
								control={control}
								label="Width"
								placeholder="100..."
							/>
						</Grid.Col>
						<Grid.Col span={3}>
							<NumberInput
								name="length"
								control={control}
								label="Length"
								placeholder="100..."
							/>
						</Grid.Col>
						<Grid.Col span={3}>
							<NumberInput
								name="height"
								control={control}
								label="Height"
								placeholder="100..."
							/>
						</Grid.Col>
						<Grid.Col span={3}>
							<NumberInput
								name="weight"
								control={control}
								label="Weight"
								placeholder="100..."
							/>
						</Grid.Col>
					</Grid>
				</div>
				<div>
					<Text className="mb-3 font-semibold text-black">Customs</Text>
					<Grid>
						<Grid.Col span={6}>
							<TextInput
								name="mid-code"
								control={control}
								label="MID code"
								placeholder="XDSKLAD9999..."
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="hs-code"
								control={control}
								label="HS code"
								placeholder="BDJSK39277W..."
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<Select
								name="country"
								control={control}
								label="Country of origin"
								placeholder="Choose a country"
								data={countries}
							/>
						</Grid.Col>
					</Grid>
				</div>
			</Flex>
		</div>
	)
}

export default ProductAttributes
