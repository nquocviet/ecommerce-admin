import { useState } from 'react'
import { Tabs } from '@mantine/core'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { CUSTOMER_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import {
	CustomersTab,
	GroupActions,
	GroupsTab,
} from '@/page-components/customers/components'

const { CUSTOMERS, GROUPS } = CUSTOMER_TABS

const Customers = () => {
	const [activeTab, setActiveTab] = useState<string | null>(CUSTOMERS)

	useActiveTab(activeTab, setActiveTab)

	return (
		<>
			<Meta
				title={`Customer Management | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.CUSTOMERS}`}
			/>
			<Paper className="grow">
				<Tabs
					value={activeTab}
					onTabChange={(tab) => setActiveTab(tab)}
					keepMounted={false}
				>
					<Tabs.List>
						<Tabs.Tab value={CUSTOMERS}>Customers</Tabs.Tab>
						<Tabs.Tab value={GROUPS}>Groups</Tabs.Tab>
						{activeTab === GROUPS && <GroupActions />}
					</Tabs.List>

					<Tabs.Panel value={CUSTOMERS}>
						<CustomersTab />
					</Tabs.Panel>

					<Tabs.Panel value={GROUPS}>
						<GroupsTab />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</>
	)
}

export default Customers
