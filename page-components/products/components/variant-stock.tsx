import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Grid, Text } from '@mantine/core'

import { NumberInput, SwitchGroup, TextInput } from '@/components'
import { STORE_NAME } from '@/constants/common'

const VariantStock = () => {
	const { control } = useFormContext()

	return (
		<div className="text-sm text-gray-600">
			<Text>Configure the inventory and stock for this variant.</Text>
			<SwitchGroup
				title="Manage inventory"
				description={`When checked ${STORE_NAME} will regulate the inventory when orders and returns are made."`}
				name="manage_inventory"
				control={control}
				className="mt-6"
				defaultChecked
			/>
			<SwitchGroup
				title="Allow backorders"
				description="When checked the product will be available for purchase despite the product being sold out"
				name="allow_backorders"
				control={control}
				className="mt-6"
			/>
			<Grid className="mt-6">
				<Grid.Col xs={6}>
					<TextInput
						name="sku"
						control={control}
						label="Stock keeping unit (SKU)"
						placeholder="SUN-G, JK1234..."
					/>
				</Grid.Col>
				<Grid.Col xs={6}>
					<NumberInput
						name="quantity"
						control={control}
						label="Quantity in stock"
						placeholder="100..."
					/>
				</Grid.Col>
				<Grid.Col xs={6}>
					<TextInput
						name="ean"
						control={control}
						label="EAN (barcode)"
						placeholder="123456789..."
					/>
				</Grid.Col>
				<Grid.Col xs={6}>
					<TextInput
						name="upc"
						control={control}
						label="UPC (barcode)"
						placeholder="024681012..."
					/>
				</Grid.Col>
				<Grid.Col xs={6}>
					<TextInput
						name="barcode"
						control={control}
						label="Barcode"
						placeholder="987654321..."
					/>
				</Grid.Col>
			</Grid>
		</div>
	)
}

export default VariantStock
