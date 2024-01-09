import React from 'react'
import { useForm } from 'react-hook-form'
import { Divider, Flex, Grid, Text } from '@mantine/core'

import {
	Modal,
	ModalOpenedProps,
	MultiSelect,
	Select,
	TextInput,
} from '@/components'
import { useCountries } from '@/lib/country'

const ModalEditRegion = (props: ModalOpenedProps) => {
	const { control } = useForm()
	const { data = [] } = useCountries()
	const countries = data?.map(({ numeric: value, name: label }) => ({
		value,
		label,
	}))

	return (
		<Modal
			title="Edit region details"
			size="xl"
			confirmText="Save and close"
			withClose={false}
			{...props}
		>
			<div className="text-sm font-semibold text-gray-600">
				<form>
					<Text>Details</Text>
					<Flex direction="column" align="stretch" gap={24} className="mt-4">
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
					<Divider my={28} />
					<Text>Providers</Text>
					<Grid className="mt-4">
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
				</form>
			</div>
		</Modal>
	)
}

export default ModalEditRegion
