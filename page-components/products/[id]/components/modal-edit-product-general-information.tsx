import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import {
	Modal,
	ModalOpenedProps,
	Select,
	SwitchGroup,
	Textarea,
	TextInput,
} from '@/components'
import { useCollections } from '@/lib/collection'
import { useProductDetails } from '@/lib/product'

const ModalEditProductGeneralInformation = ({
	opened,
	onClose,
}: ModalOpenedProps) => {
	const { control, reset } = useForm()
	const { data } = useProductDetails()
	const { data: dataCollections = [] } = useCollections()
	const collections = dataCollections?.map(
		({ handle: value, title: label }) => ({
			value,
			label,
		})
	)

	useEffect(() => {
		if (!data) return

		const {
			title,
			subtitle,
			handle,
			material,
			description,
			discountable,
			collection,
		} = data

		reset({
			title,
			subtitle,
			handle,
			material,
			description,
			discountable,
			collection: collection.handle,
		})
	}, [data, reset])

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Edit general information"
			size="xl"
			confirmText="Save"
		>
			<form>
				<Flex
					direction="column"
					align="stretch"
					gap={24}
					className="text-sm text-gray-500"
				>
					<div>
						<Grid>
							<Grid.Col xs={6}>
								<TextInput
									name="title"
									control={control}
									label="Title"
									placeholder="Winter Jacket"
									required
								/>
							</Grid.Col>
							<Grid.Col xs={6}>
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
						<Grid.Col xs={6}>
							<TextInput
								name="handle"
								control={control}
								label="Handle"
								placeholder="winter-jacket"
								textIcon="/"
								required
							/>
						</Grid.Col>
						<Grid.Col xs={6}>
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
					<div>
						<Text className="mb-3 font-semibold text-black">
							Organize product
						</Text>
						<Grid>
							<Grid.Col xs={6}>
								<Select
									name="type"
									control={control}
									label="Type"
									placeholder="Choose a type"
									data={[]}
								/>
							</Grid.Col>
							<Grid.Col xs={6}>
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
						title="Discountable"
						description="When unchecked discounts will not be applied to this product."
						name="discountable"
						control={control}
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditProductGeneralInformation
