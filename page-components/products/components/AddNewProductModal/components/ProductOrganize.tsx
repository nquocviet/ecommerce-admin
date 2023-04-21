import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import { Select, SwitchGroup, TextInput } from '@/components'
import { useCollections } from '@/lib/collection'

const ProductOrganize = () => {
	const { control } = useFormContext()
	const { data = [] } = useCollections()
	const collections = data?.map(({ handle: value, title: label }) => ({
		value,
		label,
	}))

	return (
		<div className="mb-8 text-sm text-gray-600">
			<Text>To start selling, all you need is a name and a price.</Text>
			<Flex direction="column" align="stretch" gap={24} className="mt-6">
				<div>
					<Text className="mb-3 font-semibold text-black">
						Organize product
					</Text>
					<Grid>
						<Grid.Col span={6}>
							<Select
								name="type"
								control={control}
								label="Type"
								placeholder="Choose a type"
								data={[]}
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<Select
								name="collection"
								control={control}
								label="Collection"
								placeholder="Choose a collection"
								data={collections}
							/>
						</Grid.Col>
					</Grid>
				</div>
				<TextInput
					name="tags"
					control={control}
					label="Tags (comma separated)"
				/>
				<SwitchGroup
					title="Sales channels"
					description="This product will only be available in the default sales channel if left untouched."
					name="sales-channel"
					control={control}
				/>
			</Flex>
		</div>
	)
}

export default ProductOrganize
