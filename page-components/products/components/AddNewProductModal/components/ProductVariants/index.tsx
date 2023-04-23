import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ActionIcon, Button, Flex, Grid, Text, Tooltip } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { Info, Plus, Trash } from '@phosphor-icons/react'

import { TextInput } from '@/components'

import CreateVariantModal from '../CreateVariantModal'

const ProductVariants = () => {
	const [newVariantOpened, setNewVariantOpened] = useToggle()
	const { control } = useFormContext()
	const {
		fields: options,
		append,
		remove,
	} = useFieldArray({
		control,
		name: 'product-options',
	})

	return (
		<div className="mb-8 text-sm text-gray-600">
			<Text>Add variations of this product.</Text>
			<Text>
				Offer your customers different options for color, format, size, shape,
				etc.
			</Text>
			<Flex direction="column" align="stretch" gap={24} className="mt-6">
				<Flex direction="column" align="stretch" gap={16}>
					<Flex align="center" gap={6}>
						<Text className="font-semibold text-black">Product options</Text>
						<Tooltip
							width={240}
							label="Options are used to define the color, size, etc. of the product."
							multiline
						>
							<Info size={16} />
						</Tooltip>
					</Flex>
					{options.map((field, index) => (
						<Grid key={field.id}>
							<Grid.Col span={4}>
								<TextInput
									control={control}
									name={`product-options.${index}.title`}
									label="Option title"
								/>
							</Grid.Col>
							<Grid.Col span={8}>
								<Flex align="flex-end" gap={12}>
									<TextInput
										control={control}
										name={`product-options.${index}.variations`}
										label="Variations (comma separated)"
										className="grow"
									/>
									<ActionIcon
										color="gray"
										variant="outline"
										size="lg"
										onClick={() => remove(index)}
									>
										<Trash size={20} />
									</ActionIcon>
								</Flex>
							</Grid.Col>
						</Grid>
					))}
					<Button
						color="gray"
						variant="outline"
						leftIcon={<Plus size={16} />}
						onClick={() => append({ title: '', variations: '' })}
					>
						Add an option
					</Button>
				</Flex>
				<Flex direction="column" align="stretch" gap={16}>
					<Flex align="center" gap={6}>
						<Text className="font-semibold text-black">Product variants</Text>
						<Tooltip
							width={240}
							label="You must add at least one product option before you can begin adding product variants."
							multiline
						>
							<Info size={16} />
						</Tooltip>
					</Flex>
					<Button
						color="gray"
						variant="outline"
						leftIcon={<Plus size={16} />}
						onClick={() => setNewVariantOpened(true)}
					>
						Add a variant
					</Button>
				</Flex>
			</Flex>
			<CreateVariantModal
				opened={newVariantOpened}
				onClose={setNewVariantOpened}
			/>
		</div>
	)
}

export default ProductVariants
