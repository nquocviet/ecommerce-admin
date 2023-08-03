import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Plus, Trash } from '@phosphor-icons/react'

import { CUSTOMER_GROUP_COLUMNS } from '@/columns/customer-group'
import {
	InputSearch,
	Loader,
	Meta,
	PageTitle,
	Paper,
	Table,
} from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { PAGE_SIZE } from '@/constants/pagination'
import { ROUTES } from '@/constants/routes'
import { useCustomerGroupDetails } from '@/lib/customer'
import {
	ModalAddEditCustomerGroup,
	ModalDeleteCustomerGroup,
	ModalEditCustomers,
} from '@/page-components/customers/components'

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
		<>
			<Meta
				title={`${data.name} | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.CUSTOMER_GROUPS}`}
			/>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title={data.name}
					action={
						<Menu shadow="md" width={200}>
							<Menu.Target>
								<ActionIcon aria-label="More options">
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
			<Paper className="grow">
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
			<ModalAddEditCustomerGroup
				opened={editCustomerGroupOpened}
				onClose={closeEditCustomerGroup}
				defaultValues={{
					title: data.name,
					metadata: [],
				}}
			/>
			<ModalDeleteCustomerGroup
				opened={deleteCustomerGroupOpened}
				onClose={closeDeleteCustomerGroup}
			/>
			<ModalEditCustomers
				opened={editCustomersOpened}
				onClose={closeEditCustomers}
			/>
		</>
	)
}

export default CustomerGroups
