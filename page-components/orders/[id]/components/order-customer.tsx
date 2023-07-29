import React from 'react'
import { ActionIcon, Avatar, Flex, Menu, Text } from '@mantine/core'
import {
	ArrowsClockwise,
	CurrencyDollar,
	DotsThree,
	EnvelopeSimple,
	IdentificationBadge,
	Truck,
} from '@phosphor-icons/react'

import { BoxContent, PageTitle, Paper } from '@/components'
import { useOrderDetails } from '@/lib/order'

const OrderCustomer = () => {
	const { data } = useOrderDetails()

	return (
		<Paper>
			<PageTitle
				order={2}
				size="sm"
				title="Customer"
				action={
					<Menu shadow="md" width={220}>
						<Menu.Target>
							<ActionIcon>
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item icon={<IdentificationBadge size={20} />}>
								Go to customer
							</Menu.Item>
							<Menu.Item icon={<ArrowsClockwise size={20} />}>
								Transfer ownership
							</Menu.Item>
							<Menu.Item icon={<Truck size={20} />}>
								Edit shipping address
							</Menu.Item>
							<Menu.Item icon={<CurrencyDollar size={20} />}>
								Edit billing address
							</Menu.Item>
							<Menu.Item icon={<EnvelopeSimple size={20} />}>
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
	)
}

export default OrderCustomer
