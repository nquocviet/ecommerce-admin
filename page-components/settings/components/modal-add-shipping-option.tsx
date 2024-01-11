import React from 'react'
import { useForm } from 'react-hook-form'
import { Divider, Flex, Grid, Text } from '@mantine/core'

import {
	Modal,
	ModalOpenedProps,
	NumberInput,
	Select,
	SwitchGroup,
	TextInput,
} from '@/components'

const ModalAddShippingOption = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal title="Add shipping option" size="xl" confirmText="Save" {...props}>
			<form>
				<SwitchGroup
					name="visible_in_store"
					control={control}
					title="Visible in store"
					description="Enable or disable the shipping option visiblity in store."
				/>
				<Divider my={32} />
				<Text className="text-sm font-semibold text-gray-500">Details</Text>
				<Flex direction="column" align="stretch" gap={24} className="mt-4">
					<Grid>
						<Grid.Col xs={6}>
							<TextInput
								name="title"
								control={control}
								label="Title"
								placeholder="Title"
								required
							/>
						</Grid.Col>
						<Grid.Col xs={6}>
							<Select
								name="price_type"
								control={control}
								label="Price type"
								placeholder="Choose a price type"
								data={[
									{ value: 'flat_rate', label: 'Flat rate' },
									{ value: 'calculated', label: 'Calculated' },
								]}
								required
							/>
						</Grid.Col>
					</Grid>
					<Grid>
						<Grid.Col xs={6}>
							<Select
								name="shipping_profile"
								control={control}
								label="Shipping profile"
								placeholder="Choose a shipping profile"
								data={[
									{ value: 'default', label: 'Default shipping profile' },
									{ value: 'gift_card', label: 'Gift card profile' },
								]}
								required
							/>
						</Grid.Col>
						<Grid.Col xs={6}>
							<Select
								name="fulfillment_method"
								control={control}
								label="Fulfillment method"
								placeholder="Choose a fulfillment method"
								data={[{ value: 'manual', label: 'Manual' }]}
								required
							/>
						</Grid.Col>
					</Grid>
				</Flex>
				<Divider my={32} />
				<Text className="text-sm font-semibold text-gray-500">
					Requirements
				</Text>
				<div className="mt-4">
					<Grid>
						<Grid.Col xs={6}>
							<NumberInput
								name="min_subtotal"
								control={control}
								label="Min. subtotal"
								placeholder="0"
								textIcon="$"
							/>
						</Grid.Col>
						<Grid.Col xs={6}>
							<NumberInput
								name="max_subtotal"
								control={control}
								label="Max. subtotal"
								placeholder="0"
								textIcon="$"
							/>
						</Grid.Col>
					</Grid>
				</div>
			</form>
		</Modal>
	)
}

export default ModalAddShippingOption
