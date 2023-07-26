import { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { ORDER_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import {
	DraftActions,
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
			<Paper shadow="xs" p="xl" className="grow">
				<Tabs
					value={activeTab}
					onTabChange={(tab) => setActiveTab(tab)}
					keepMounted={false}
				>
					<Tabs.List>
						<Tabs.Tab value={ORDERS}>Orders</Tabs.Tab>
						<Tabs.Tab value={DRAFTS}>Drafts</Tabs.Tab>
						{activeTab === ORDERS && <OrderActions />}
						{activeTab === DRAFTS && <DraftActions />}
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
