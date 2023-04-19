import React from 'react'
import { ActionIcon, Button, Flex, Menu, Paper } from '@mantine/core'
import {
	DotsThree,
	FunnelSimple,
	NotePencil,
	Plus,
} from '@phosphor-icons/react'

import { columns } from '@/columns/sale-channel'
import { Dots, PageTitle, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const Details = () => {
	const { data, isLoading } = useProducts()

	return (
		<Paper shadow="xs" p="xl" className="h-full">
			<PageTitle
				title="Default Sales Channel"
				size="sm"
				className="mb-4"
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
								<Menu.Item icon={<NotePencil size={18} />}>
									Edit general info
								</Menu.Item>
								<Menu.Item icon={<Plus size={18} />}>Add product</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</Flex>
				}
			/>
			<Button
				color="gray"
				variant="outline"
				size="xs"
				rightIcon={<FunnelSimple size={16} />}
				className="mb-4"
			>
				Filters
			</Button>
			<Table
				records={data}
				columns={columns}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</Paper>
	)
}

export default Details
