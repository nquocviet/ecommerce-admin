import { useState } from 'react'
import { Tabs } from '@mantine/core'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { ORDER_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import {
	DraftsTab,
	OrderActions,
	OrdersTab,
} from '@/page-components/orders/components'

const { ORDERS, DRAFTS } = ORDER_TABS

const Orders = () => {
	const [activeTab, setActiveTab] = useState<string | null>(ORDERS)

	useActiveTab(activeTab, setActiveTab)

	return (
		<>
			<Meta
				title={`Order Management | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.ORDERS}`}
			/>
			<Paper className="grow">
				<Tabs
					value={activeTab}
					onTabChange={(tab) => setActiveTab(tab)}
					keepMounted={false}
				>
					<Tabs.List>
						<Tabs.Tab value={ORDERS}>Orders</Tabs.Tab>
						<Tabs.Tab value={DRAFTS}>Drafts</Tabs.Tab>
						{activeTab === ORDERS && <OrderActions />}
					</Tabs.List>

					<Tabs.Panel value={ORDERS}>
						<OrdersTab />
					</Tabs.Panel>

					<Tabs.Panel value={DRAFTS}>
						<DraftsTab />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</>
	)
}

export default Orders
