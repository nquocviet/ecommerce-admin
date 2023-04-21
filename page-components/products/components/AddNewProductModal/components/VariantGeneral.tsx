import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, Grid, Text, Tooltip } from '@mantine/core'
import { Info } from '@phosphor-icons/react'

import { Select, TextInput } from '@/components'

const VariantGeneral = () => {
	const { control } = useFormContext()

	return (
		<div className="mb-8 text-sm text-gray-600">
			<Text>Configure the general information for this variant.</Text>
			<Grid className="mt-6">
				<Grid.Col span={6}>
					<TextInput
						name="title"
						control={control}
						label="Custom title"
						placeholder="Green / XL..."
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<TextInput
						name="material"
						control={control}
						label="Material"
						placeholder="80% wool, 20% cotton..."
					/>
				</Grid.Col>
			</Grid>
			<Flex align="center" gap={6} className="mt-6">
				<Text className="font-semibold text-black">Options</Text>
				<Tooltip
					width={240}
					label="Options are used to define the color, size, etc. of the variant."
					multiline
				>
					<Info size={16} />
				</Tooltip>
			</Flex>
			<Grid className="mt-2">
				<Grid.Col span={6}>
					<Select
						control={control}
						name="options"
						placeholder="Choose an option"
						data={[]}
					/>
				</Grid.Col>
			</Grid>
		</div>
	)
}

export default VariantGeneral
