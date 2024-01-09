import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import { MultiSelect, NumberInput, Select, TextInput } from '@/components'
import { useCountries } from '@/lib/country'

const RegionNewDetails = () => {
	const { control } = useFormContext()
	const { data = [] } = useCountries()
	const countries = data?.map(({ numeric: value, name: label }) => ({
		value,
		label,
	}))

	return (
		<div className="text-sm text-gray-600">
			<Text>Add the region details.</Text>
			<Flex direction="column" align="stretch" gap={24} className="mt-6">
				<Grid>
					<Grid.Col xs={6}>
						<TextInput
							name="title"
							control={control}
							label="Title"
							placeholder="Europe"
							required
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<Select
							name="currency"
							control={control}
							label="Currency"
							placeholder="Choose currency"
							data={[
								{ value: 'EUR', label: 'EUR (Euro)' },
								{ value: 'USD', label: 'USD (US Dollar)' },
							]}
							required
						/>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col xs={6}>
						<NumberInput
							name="default_tax_rate"
							control={control}
							label="Default tax rate"
							placeholder="25"
							textIcon="%"
							required
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<TextInput
							name="default_tax_code"
							control={control}
							label="Default tax code"
							placeholder="1000"
						/>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col xs={6}>
						<MultiSelect
							name="countries"
							control={control}
							label="Countries"
							placeholder="Choose countries"
							data={countries}
							maxSelectedValues={3}
						/>
					</Grid.Col>
				</Grid>
			</Flex>
		</div>
	)
}

export default RegionNewDetails
