import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Menu, Paper } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Plus, Trash } from '@phosphor-icons/react'

import { CUSTOMER_GROUP_COLUMNS } from '@/columns/customer-group'
import { InputSearch, Loader, PageTitle, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { CUSTOMER_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import { useCustomerGroupDetails } from '@/lib/customer'
import {
	AddEditCustomerGroupModal,
	DeleteCustomerGroupModal,
	EditCustomersModal,
} from '@/page-components/customers/components'
import { ROUTES } from '@/routes'

const CustomerGroups = () => {
	const { control } = useForm()
	const [
		editCustomerGroupOpened,
		{ open: openEditCustomerGroup, close: closeEditCustomerGroup },
	] = useDisclosure(false)
	const [
		deleteCustomerGroupOpened,
		{ open: openDeleteCustomerGroup, close: closeDeleteCustomerGroup },
	] = useDisclosure(false)
	const [
		editCustomersOpened,
		{ open: openEditCustomers, close: closeEditCustomers },
	] = useDisclosure(false)
	const { data, isLoading } = useCustomerGroupDetails()

	if (isLoading || !data) return <Loader />

	return (
		<DetailsLayout
			label="Back to customer groups"
			href={{
				pathname: ROUTES.CUSTOMER_GROUP_DETAILS,
				query: { tab: CUSTOMER_TABS.GROUPS },
			}}
		>
			<Paper shadow="xs" p="xl">
				<PageTitle
					order={2}
					size="sm"
					title={data.name}
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
									onClick={openEditCustomerGroup}
								>
									Edit customer
								</Menu.Item>
								<Menu.Item
									icon={<Trash size={20} />}
									sx={{
										color: 'var(--red-600)',
									}}
									onClick={openDeleteCustomerGroup}
								>
									Delete
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
			</Paper>
			<Paper shadow="xs" p="xl" className="grow">
				<Flex direction="column" align="stretch" className="h-full">
					<PageTitle
						order={2}
						size="sm"
						title="Customers"
						action={
							<Button
								color="gray"
								variant="outline"
								leftIcon={<Plus size={16} />}
								onClick={openEditCustomers}
							>
								Edit customers
							</Button>
						}
					/>
					<form className="mt-8">
						<Flex justify="flex-end">
							<InputSearch name="search" control={control} />
						</Flex>
					</form>
					<Table
						records={data.customers}
						columns={CUSTOMER_GROUP_COLUMNS}
						fetching={isLoading}
						totalRecords={data.customers?.length}
						recordsPerPage={PAGE_SIZE}
						page={1}
						onPageChange={() => null}
						className="grow"
					/>
				</Flex>
			</Paper>
			<AddEditCustomerGroupModal
				opened={editCustomerGroupOpened}
				onClose={closeEditCustomerGroup}
				defaultValues={{
					title: data.name,
					metadata: [],
				}}
			/>
			<DeleteCustomerGroupModal
				opened={deleteCustomerGroupOpened}
				onClose={closeDeleteCustomerGroup}
			/>
			<EditCustomersModal
				opened={editCustomersOpened}
				onClose={closeEditCustomers}
			/>
		</DetailsLayout>
	)
}

export default CustomerGroups
