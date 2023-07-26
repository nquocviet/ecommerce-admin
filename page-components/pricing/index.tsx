import { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { PRICING_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import {
	PricingActions,
	PricingsTab,
} from '@/page-components/pricing/components'

const { PRICING } = PRICING_TABS

const Pricing = () => {
	const [activeTab, setActiveTab] = useState<string | null>(PRICING)

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
						<Tabs.Tab value={PRICING}>Pricing</Tabs.Tab>
						{activeTab === PRICING && <PricingActions />}
					</Tabs.List>

					<Tabs.Panel value={PRICING}>
						<PricingsTab />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</>
	)
}

export default Pricing
