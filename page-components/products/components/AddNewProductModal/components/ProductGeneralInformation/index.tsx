import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex, Grid, Text, Tooltip } from '@mantine/core'
import { Info } from '@phosphor-icons/react'

import { SwitchGroup, Textarea, TextInput } from '@/components'

const ProductGeneralInformation = () => {
	const { control } = useFormContext()

	return (
		<div className="mb-8 text-sm text-gray-600">
			<Text>To start selling, all you need is a name and a price.</Text>
			<Flex direction="column" align="stretch" gap={24} className="mt-6">
				<div>
					<Grid>
						<Grid.Col span={6}>
							<TextInput
								name="title"
								control={control}
								label="Title"
								placeholder="Winter Jacket"
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="subtitle"
								control={control}
								label="Subtitle"
								placeholder="Warm and cozy"
							/>
						</Grid.Col>
					</Grid>
					<div className="mt-3">
						<Text>Give your product a short and clear title.</Text>
						<Text>
							50-60 characters is the recommended length for search engines.
						</Text>
					</div>
				</div>
				<Grid>
					<Grid.Col span={6}>
						<TextInput
							name="handle"
							control={control}
							label={
								<Flex align="center" gap={6}>
									Handle
									<Tooltip
										width={240}
										label="The handle is the part of the URL that identifies the product. If not specified, it will be generated from the title."
										multiline
									>
										<Info size={16} className="text-gray-600" />
									</Tooltip>
								</Flex>
							}
							placeholder="/winter-jacket"
							withSlash
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							name="material"
							control={control}
							label="Material"
							placeholder="100% cotton"
						/>
					</Grid.Col>
				</Grid>
				<div>
					<Textarea
						name="description"
						control={control}
						label="Description"
						placeholder="A warm and cozy jacket..."
						minRows={4}
					/>
					<div className="mt-3">
						<Text>Give your product a short and clear description.</Text>
						<Text>
							120-160 characters is the recommended length for search engines.
						</Text>
					</div>
				</div>
				<SwitchGroup
					title="Discountable"
					description="When unchecked discounts will not be applied to this product."
					name="discountable"
					control={control}
					defaultChecked
				/>
			</Flex>
		</div>
	)
}

export default ProductGeneralInformation
