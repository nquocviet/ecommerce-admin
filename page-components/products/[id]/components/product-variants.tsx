import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ActionIcon, Flex, Menu, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, GearSix, Plus } from '@phosphor-icons/react'

import { PRODUCT_VARIANT_COLUMNS } from '@/columns/product'
import { Chip, PageTitle, Paper, Table } from '@/components'
import { useProductDetails } from '@/lib/product'
import { ModalEditOptions } from '@/page-components/products/[id]/components'
import { ModalAddEditVariant } from '@/page-components/products/components'
import { ProductOptionEntity } from '@/types/product'

type ProductVariantsOptions = {
	title: string
	items: ProductOptionEntity[]
}

const ProductVariants = () => {
	const methods = useForm()
	const { data } = useProductDetails()
	const [addVariantOpened, { open: openAddVariant, close: closeAddVariant }] =
		useDisclosure(false)
	const [
		editOptionsOpened,
		{ open: openEditOptions, close: closeEditOptions },
	] = useDisclosure(false)

	const options = useMemo(() => {
		if (!data) return []
		return data.variants.map(({ options }) => options).flat(1)
	}, [data])
	const variants = useMemo(() => {
		if (!data) return []
		return data?.options.reduce((prev, curr) => {
			const { id, title } = curr
			const items = options.reduce((prevOpts, currOpts) => {
				const { option_id, value } = currOpts
				if (option_id === id) {
					if (prevOpts.some((opts) => opts.value === value)) return prevOpts

					return [...prevOpts, currOpts]
				}
				return prevOpts
			}, [] as ProductOptionEntity[])

			return [
				...prev,
				{
					title,
					items,
				},
			]
		}, [] as ProductVariantsOptions[])
	}, [data, options])

	return (
		<FormProvider {...methods}>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Variants"
					action={
						<Menu shadow="md" width={240}>
							<Menu.Target>
								<ActionIcon aria-label="More options">
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item icon={<Plus size={20} />} onClick={openAddVariant}>
									Add variant
								</Menu.Item>
								<Menu.Item
									icon={<GearSix size={20} />}
									onClick={openEditOptions}
								>
									Edit options
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
				<div className="text-sm">
					<Flex wrap="wrap" className="mt-6 mb-8" gap={32}>
						{variants.map(({ title, items }, index) => {
							return (
								<div key={index}>
									<Text className="mb-2 font-semibold text-black">{title}</Text>
									<Flex gap={6}>
										{items.map(({ id, value }) => (
											<Chip key={id} variant="contained" label={value} />
										))}
									</Flex>
								</div>
							)
						})}
					</Flex>
					<Text className="mb-2 font-semibold text-black">
						Product variants{' '}
						<Text component="span" className="font-regular text-gray-500">
							({data?.variants.length})
						</Text>
					</Text>
					<Table
						size="sm"
						records={data?.variants}
						columns={PRODUCT_VARIANT_COLUMNS}
					/>
				</div>
			</Paper>
			<ModalAddEditVariant
				opened={addVariantOpened}
				onClose={closeAddVariant}
			/>
			<ModalEditOptions opened={editOptionsOpened} onClose={closeEditOptions} />
		</FormProvider>
	)
}

export default ProductVariants
