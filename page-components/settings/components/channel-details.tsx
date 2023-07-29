import React from 'react'
import { ActionIcon, Button, Flex, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Plus } from '@phosphor-icons/react'

import { SALE_CHANNEL_COLUMNS } from '@/columns/sale-channel'
import { Dots, FilterPopover, PageTitle, Paper, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'
import {
	ModalAddNewProduct,
	ModalEditSalesChannel,
} from '@/page-components/settings/components'

const filterOptions = [
	{ value: 'status', label: 'Status' },
	{ value: 'collection', label: 'Collection' },
	{ value: 'tags', label: 'Tags' },
]

const ChannelDetails = () => {
	const [
		editSalesChannelOpened,
		{ open: openEditSalesChannel, close: closeEditSalesChannel },
	] = useDisclosure(false)
	const [
		addNewProductOpened,
		{ open: openAddNewProduct, close: closeAddNewProduct },
	] = useDisclosure(false)
	const { data, isLoading } = useProducts()

	return (
		<Paper className="h-full">
			<PageTitle
				title="Default Sales Channel"
				size="sm"
				action={
					<Flex gap={16}>
						<Menu shadow="md" width={200}>
							<Menu.Target>
								<Button color="gray" variant="white" size="sm">
									<Dots size={6} color="green" className="mr-2" />
									Enabled
								</Button>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item>
									<Dots size={6} color="gray" className="mr-2 mb-0.5" />
									Disabled
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
								<Menu.Item
									icon={<NotePencil size={20} />}
									onClick={openEditSalesChannel}
								>
									Edit general info
								</Menu.Item>
								<Menu.Item
									icon={<Plus size={20} />}
									onClick={openAddNewProduct}
								>
									Add product
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</Flex>
				}
			/>
			<FilterPopover filterOptions={filterOptions} className="my-4" />
			<Table
				records={data}
				columns={SALE_CHANNEL_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
			<ModalEditSalesChannel
				opened={editSalesChannelOpened}
				onClose={closeEditSalesChannel}
			/>
			<ModalAddNewProduct
				opened={addNewProductOpened}
				onClose={closeAddNewProduct}
			/>
		</Paper>
	)
}

export default ChannelDetails
