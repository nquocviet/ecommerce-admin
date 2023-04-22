import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Menu, Paper } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

import { COLLECTION_DETAIL_COLUMNS } from '@/columns/collection-detail'
import {
	InputSearch,
	JSONView,
	Loader,
	ModalConfirm,
	PageTitle,
	Table,
} from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { PRODUCT_TABS } from '@/constants/tabs'
import { DetailLayout } from '@/layouts'
import { useCollectionDetail } from '@/lib/collection'
import ROUTES from '@/routes'

import { EditCollectionModal, EditProductsModal } from './components'

const CollectionDetail = () => {
	const [editCollectionOpened, setEditCollectionOpened] = useToggle()
	const [deleteCollectionOpened, setDeleteCollectionOpened] = useToggle()
	const [editProductsOpened, setEditProductsOpened] = useToggle()
	const { control } = useForm()
	const { data, isLoading } = useCollectionDetail()

	if (isLoading) return <Loader />

	return (
		<DetailLayout
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
									icon={<NotePencil size={18} />}
									onClick={() => setEditCollectionOpened(true)}
								>
									Edit collection
								</Menu.Item>
								<Menu.Item
									icon={<Trash size={18} />}
									sx={{
										color: 'var(--red-600)',
									}}
									onClick={() => setDeleteCollectionOpened(true)}
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
								onClick={() => setEditProductsOpened(true)}
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
						columns={COLLECTION_DETAIL_COLUMNS}
						fetching={isLoading}
						totalRecords={data?.products?.length}
						recordsPerPage={PAGE_SIZE}
						page={1}
						onPageChange={() => null}
					/>
				</Flex>
			</Paper>
			<ModalConfirm
				title="Delete Collection"
				opened={deleteCollectionOpened}
				onClose={setDeleteCollectionOpened}
				message="Are you sure you want to delete this collection?"
			/>
			<EditCollectionModal
				opened={editCollectionOpened}
				onClose={setEditCollectionOpened}
			/>
			<EditProductsModal
				opened={editProductsOpened}
				onClose={setEditProductsOpened}
			/>
		</DetailLayout>
	)
}

export default CollectionDetail
