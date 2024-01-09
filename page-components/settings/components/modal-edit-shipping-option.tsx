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

const ModalEditShippingOption = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal
			title="Edit shipping option"
			size="xl"
			confirmText="Save and close"
			{...props}
		>
			<form>
				<Text className="mb-2 text-sm font-semibold text-gray-600">
					Fulfillment Method
				</Text>
				<Text className="text-sm text-gray-600">
					manual-fulfillment via manual
				</Text>
				<Divider my={32} />
				<SwitchGroup
					name="visible_in_store"
					control={control}
					title="Visible in store"
					description="Enable or disable the shipping option visiblity in store."
				/>
				<Divider my={32} />
				<Text className="text-sm font-semibold text-gray-600">Details</Text>
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
							<Grid>
								<Grid.Col xs={7}>
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
								<Grid.Col xs={5}>
									<NumberInput
										name="price"
										control={control}
										label="Price"
										placeholder="0"
										textIcon="€"
									/>
								</Grid.Col>
							</Grid>
						</Grid.Col>
					</Grid>
				</Flex>
				<Divider my={32} />
				<Text className="text-sm font-semibold text-gray-600">
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
								textIcon="€"
							/>
						</Grid.Col>
						<Grid.Col xs={6}>
							<NumberInput
								name="max_subtotal"
								control={control}
								label="Max. subtotal"
								placeholder="0"
								textIcon="€"
							/>
						</Grid.Col>
					</Grid>
				</div>
			</form>
		</Modal>
	)
}

export default ModalEditShippingOption
