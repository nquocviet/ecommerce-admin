import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Text } from '@mantine/core'

import { Modal, ModalOpenedProps, Select, TextInput } from '@/components'
import { useCountries } from '@/lib/country'

const ModalEditBillingAddress = (props: ModalOpenedProps) => {
	const { control } = useForm()
	const { data = [] } = useCountries()
	const countries = data?.map(({ numeric: value, name: label }) => ({
		value,
		label,
	}))

	return (
		<Modal title="Edit billing address" size="xl" confirmText="Save" {...props}>
			<form>
				<Text className="mb-3 text-sm font-semibold">General</Text>
				<Grid>
					<Grid.Col xs={6}>
						<TextInput
							name="first_name"
							control={control}
							label="First name"
							placeholder="First name"
							required
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<TextInput
							name="last_name"
							control={control}
							label="Last name"
							placeholder="Last name"
							required
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<TextInput
							name="company"
							control={control}
							label="Company"
							placeholder="Company"
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<TextInput
							name="phone"
							control={control}
							label="Phone"
							placeholder="Phone"
						/>
					</Grid.Col>
				</Grid>
				<Text className="mb-3 mt-6 text-sm font-semibold">Billing address</Text>
				<Grid>
					<Grid.Col xs={12}>
						<TextInput
							name="address_1"
							control={control}
							label="Address 1"
							placeholder="Address 1"
							required
						/>
					</Grid.Col>
					<Grid.Col xs={12}>
						<TextInput
							name="address_2"
							control={control}
							label="Address 2"
							placeholder="Address 2"
						/>
					</Grid.Col>
					<Grid.Col xs={3}>
						<TextInput
							name="postal_code"
							control={control}
							label="Postal code"
							placeholder="Postal code"
							required
						/>
					</Grid.Col>
					<Grid.Col xs={9}>
						<TextInput
							name="city"
							control={control}
							label="City"
							placeholder="City"
							required
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<TextInput
							name="province"
							control={control}
							label="Province"
							placeholder="Province"
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<Select
							name="country"
							control={control}
							label="Country"
							placeholder="Country"
							data={countries}
							required
						/>
					</Grid.Col>
				</Grid>
			</form>
		</Modal>
	)
}

export default ModalEditBillingAddress
