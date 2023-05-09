import { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { DISCOUNT_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import { BaseLayout } from '@/layouts'

import { DiscountActions, DiscountsTab } from './components'

const { DISCOUNTS } = DISCOUNT_TABS

const Discounts = () => {
	const [activeTab, setActiveTab] = useState<string | null>(DISCOUNTS)

	useActiveTab(activeTab, setActiveTab)

	return (
		<BaseLayout>
			<Paper shadow="xs" p="xl" className="grow">
				<Tabs
					value={activeTab}
					onTabChange={(tab) => setActiveTab(tab)}
					keepMounted={false}
				>
					<Tabs.List>
						<Tabs.Tab value={DISCOUNTS}>Discounts</Tabs.Tab>
						{activeTab === DISCOUNTS && <DiscountActions />}
					</Tabs.List>

					<Tabs.Panel value={DISCOUNTS}>
						<DiscountsTab />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</BaseLayout>
	)
}

export default Discounts
