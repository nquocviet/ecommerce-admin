import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
	ActionIcon,
	Button,
	Flex,
	Grid,
	Menu,
	Paper,
	Tooltip,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, EyeSlash, Info, Plus, Trash } from '@phosphor-icons/react'

import { PRODUCT_GIFT_CARD_COLUMNS } from '@/columns/product'
import {
	Dots,
	DropzoneImage,
	Loader,
	PageTitle,
	Select,
	Table,
	Textarea,
	TextInput,
} from '@/components'
import { useProductGiftCard } from '@/lib/product'
import {
	ModalAddDenomination,
	ModalDeleteProductGiftCard,
} from '@/page-components/gift-cards/components'

const GiftCardManage = () => {
	const [
		addDenominationOpened,
		{ open: openAddDenomination, close: closeAddDenomination },
	] = useDisclosure(false)
	const [
		deleteProductGiftCardOpened,
		{ open: openDeleteProductGiftCard, close: closeDeleteProductGiftCard },
	] = useDisclosure(false)
	const { data, isLoading } = useProductGiftCard()
	const { control, reset } = useForm()

	useEffect(() => {
		if (!data) return

		reset({
			name: data.title,
			subtitle: data.subtitle,
			description: data.description,
			handle: data.handle,
		})
	}, [data, reset])

	if (isLoading) return <Loader />

	return (
		<>
			<Paper shadow="xs" p="xl">
				<PageTitle
					order={2}
					size="sm"
					title="Product information"
					description="Manage the settings for your Gift Card"
					action={
						<Flex gap={16}>
							<Menu shadow="md" width={200}>
								<Menu.Target>
									<Button color="gray" variant="white" size="sm">
										<Dots size={6} color="green" className="mr-2" />
										Published
									</Button>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item>
										<Dots size={6} color="gray" className="mr-2 mb-0.5" />
										Draft
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
							<Menu shadow="md" width={200}>
								<Menu.Target>
									<ActionIcon>
										<DotsThree size={20} weight="bold" />
									</ActionIcon>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item icon={<EyeSlash size={20} />}>Unpublish</Menu.Item>
									<Menu.Item
										icon={<Trash size={20} />}
										sx={{
											color: 'var(--red-600)',
										}}
										onClick={openDeleteProductGiftCard}
									>
										Delete
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Flex>
					}
				/>
				<Grid className="my-6">
					<Grid.Col span={6}>
						<TextInput
							name="name"
							control={control}
							label="Name"
							placeholder="Add name"
							required
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							name="subtitle"
							control={control}
							label="Subtitle"
							placeholder="Add a subtitle"
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Textarea
							name="description"
							control={control}
							label="Description"
							placeholder="Add a description"
							minRows={3}
						/>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={6}>
						<TextInput
							name="handle"
							control={control}
							label={
								<Flex align="center" gap={6}>
									Handle
									<Tooltip label="URL of the product.">
										<Info size={16} className="text-gray-600" />
									</Tooltip>
								</Flex>
							}
							placeholder="product handle"
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Select
							name="type"
							control={control}
							label="Type"
							placeholder="Select type..."
							data={[]}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							name="tags"
							control={control}
							label="Tags (separated by comma)"
							placeholder="Spring, summer,..."
						/>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper shadow="xs" p="xl">
				<PageTitle
					order={2}
					size="sm"
					title="Denominations"
					description="Manage your denominations"
					action={
						<Button
							color="gray"
							variant="outline"
							leftIcon={<Plus size={16} />}
							onClick={openAddDenomination}
						>
							Add denomination
						</Button>
					}
				/>
				<Table
					records={data?.variants[0].prices}
					columns={PRODUCT_GIFT_CARD_COLUMNS}
					minHeight={180}
					className="mt-6"
				/>
			</Paper>
			<Paper shadow="xs" p="xl">
				<PageTitle
					order={2}
					size="sm"
					title="Images"
					description="Add up to 10 images to your product"
				/>
				<DropzoneImage onDrop={() => null} className="mt-12" />
			</Paper>
			<ModalAddDenomination
				opened={addDenominationOpened}
				onClose={closeAddDenomination}
			/>
			<ModalDeleteProductGiftCard
				opened={deleteProductGiftCardOpened}
				onClose={closeDeleteProductGiftCard}
			/>
		</>
	)
}

export default GiftCardManage
