import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Menu, Paper } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

import { COLLECTION_DETAILS_COLUMNS } from '@/columns/collection-details'
import { InputSearch, JSONView, Loader, PageTitle, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { PRODUCT_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import { useCollectionDetails } from '@/lib/collection'
import { DeleteCollectionModal } from '@/page-components/products/components'
import { ROUTES } from '@/routes'

import { EditCollectionModal, EditProductsModal } from './components'

const CollectionDetails = () => {
	const [
		editCollectionOpened,
		{ open: openEditCollection, close: closeEditCollection },
	] = useDisclosure(false)
	const [
		deleteCollectionOpened,
		{ open: openDeleteCollection, close: closeDeleteCollection },
	] = useDisclosure(false)
	const [
		editProductsOpened,
		{ open: openEditProducts, close: closeEditProducts },
	] = useDisclosure(false)
	const { control } = useForm()
	const { data, isLoading } = useCollectionDetails()

	if (isLoading) return <Loader />

	return (
		<DetailsLayout
			href={{
				pathname: ROUTES.PRODUCTS,
				query: {
					tab: PRODUCT_TABS.COLLECTIONS,
				},
			}}
			label="Back to collections"
		>
			<Paper shadow="xs" p="xl">
				<PageTitle
					order={2}
					size="sm"
					title={data?.title || ''}
					description={'/' + data?.handle}
					action={
						<Menu shadow="md" width={200}>
							<Menu.Target>
								<ActionIcon>
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item
									icon={<NotePencil size={20} />}
									onClick={openEditCollection}
								>
									Edit collection
								</Menu.Item>
								<Menu.Item
									icon={<Trash size={20} />}
									sx={{
										color: 'var(--red-600)',
									}}
									onClick={openDeleteCollection}
								>
									Delete
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
				<JSONView title="Metadata" data={data?.metadata} className="mt-6" />
			</Paper>
			<Paper shadow="xs" p="xl" className="min-h-[50vh] grow">
				<Flex direction="column" align="stretch" className="h-full">
					<PageTitle
						order={2}
						size="sm"
						title="Products"
						description="To start selling, all you need is a name, price, and image."
						action={
							<Button
								color="gray"
								variant="outline"
								size="xs"
								leftIcon={<NotePencil size={18} />}
								onClick={openEditProducts}
							>
								Edit products
							</Button>
						}
					/>
					<form>
						<Flex justify="flex-end" align="center" className="mb-4">
							<InputSearch name="search" control={control} />
						</Flex>
					</form>
					<Table
						records={data?.products}
						columns={COLLECTION_DETAILS_COLUMNS}
						fetching={isLoading}
						totalRecords={data?.products?.length}
						recordsPerPage={PAGE_SIZE}
						page={1}
						onPageChange={() => null}
					/>
				</Flex>
			</Paper>
			<DeleteCollectionModal
				opened={deleteCollectionOpened}
				onClose={closeDeleteCollection}
			/>
			<EditCollectionModal
				opened={editCollectionOpened}
				onClose={closeEditCollection}
			/>
			<EditProductsModal
				opened={editProductsOpened}
				onClose={closeEditProducts}
			/>
		</DetailsLayout>
	)
}

export default CollectionDetails
