import React from 'react'
import { ActionIcon, Avatar, Flex, Menu, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	CurrencyDollar,
	DotsThree,
	EnvelopeSimple,
	IdentificationBadge,
	Truck,
} from '@phosphor-icons/react'
import Link from 'next/link'

import { BoxContent, PageTitle, Paper } from '@/components'
import { ROUTES } from '@/constants/routes'
import { useOrderDetails } from '@/lib/order'
import {
	ModalEditBillingAddress,
	ModalEditEmail,
	ModalEditShippingAddress,
} from '@/page-components/orders/[id]/components'

const OrderCustomer = () => {
	const { data } = useOrderDetails()
	const [
		editShippingAddressOpened,
		{ open: openEditShippingAddress, close: closeEditShippingAddress },
	] = useDisclosure(false)
	const [
		editBillingAddressOpened,
		{ open: openEditBillingAddress, close: closeEditBillingAddress },
	] = useDisclosure(false)
	const [editEmailOpened, { open: openEditEmail, close: closeEditEmail }] =
		useDisclosure(false)

	return (
		<>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Customer"
					action={
						<Menu shadow="md" width={220}>
							<Menu.Target>
								<ActionIcon aria-label="More options">
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item
									component={Link}
									href={{
										pathname: ROUTES.CUSTOMER_DETAILS,
										query: { id: data?.customer_id },
									}}
									icon={<IdentificationBadge size={20} />}
								>
									Go to customer
								</Menu.Item>
								<Menu.Item
									icon={<Truck size={20} />}
									onClick={openEditShippingAddress}
								>
									Edit shipping address
								</Menu.Item>
								<Menu.Item
									icon={<CurrencyDollar size={20} />}
									onClick={openEditBillingAddress}
								>
									Edit billing address
								</Menu.Item>
								<Menu.Item
									icon={<EnvelopeSimple size={20} />}
									onClick={openEditEmail}
								>
									Edit email address
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
				<Flex align="center" gap={10} className="mt-8">
					<Avatar
						size="md"
						radius="xl"
						variant="filled"
						className="child:bg-primary-400"
					>
						{data?.customer.first_name.charAt(0).toUpperCase()}
					</Avatar>
					<div>
						<Text>{`${data?.customer.first_name} ${data?.customer.last_name}`}</Text>
						<Text>{data?.customer.phone}</Text>
					</div>
				</Flex>
				<Flex className="mt-6 flex-col gap-4 sm:flex-row sm:gap-0">
					<BoxContent
						title="Contact"
						description={
							<Text className="whitespace-nowrap">{data?.customer.email}</Text>
						}
					/>
					<BoxContent
						title="Shipping"
						description={`${data?.shipping_address.address_1} ${data?.shipping_address.address_2}`}
					/>
					<BoxContent
						title="Billing"
						description={`${data?.billing_address.address_1} ${data?.billing_address.address_2}`}
						lastItem
					/>
				</Flex>
			</Paper>
			<ModalEditShippingAddress
				opened={editShippingAddressOpened}
				onClose={closeEditShippingAddress}
			/>
			<ModalEditBillingAddress
				opened={editBillingAddressOpened}
				onClose={closeEditBillingAddress}
			/>
			<ModalEditEmail opened={editEmailOpened} onClose={closeEditEmail} />
		</>
	)
}

export default OrderCustomer
