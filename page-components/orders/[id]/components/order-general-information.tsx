import React from 'react'
import { ActionIcon, Flex, Menu } from '@mantine/core'
import { DotsThree, Prohibit } from '@phosphor-icons/react'

import { BoxContent, PageTitle, Paper } from '@/components'
import { FULL_DATE_TIME_OPTIONS } from '@/constants/common'
import { useOrderDetails } from '@/lib/order'
import { formatDate } from '@/utils'

const OrderGeneralInformation = () => {
	const { data } = useOrderDetails()

	return (
		<Paper>
			<PageTitle
				order={2}
				size="sm"
				title={`#${data?.display_id}`}
				description={`${
					data?.created_at &&
					formatDate(data?.created_at, FULL_DATE_TIME_OPTIONS)
				}`}
				action={
					<Menu shadow="md" width={220}>
						<Menu.Target>
							<ActionIcon>
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								icon={<Prohibit size={20} />}
								sx={{
									color: 'var(--red-600)',
								}}
							>
								Cancel order
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				}
			/>
			<Flex className="mt-6 flex-col gap-4 sm:flex-row sm:gap-0">
				<BoxContent title="Email" description={data?.email} />
				<BoxContent title="Phone" description={data?.customer.phone} />
				<BoxContent
					title="Payment"
					description={data?.payment_status}
					className="capitalize"
					lastItem
				/>
			</Flex>
		</Paper>
	)
}

export default OrderGeneralInformation
