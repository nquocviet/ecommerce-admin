import { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { CUSTOMER_TABS } from '@/constants/tabs'
import { BaseLayout } from '@/layouts'

import { CustomersTab, GroupActions, GroupsTab } from './components'

const { CUSTOMERS, GROUPS } = CUSTOMER_TABS

const Customers = () => {
	const [activeTab, setActiveTab] = useState<string | null>(CUSTOMERS)

	return (
		<BaseLayout>
			<Paper shadow="xs" p="xl" className="grow">
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
		</BaseLayout>
	)
}

export default Customers
