import { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { PRICING_TABS } from '@/constants/tabs'
import { BaseLayout } from '@/layouts'

import { PricingActions, PricingsTab } from './components'

const { PRICING } = PRICING_TABS

const Pricing = () => {
	const [activeTab, setActiveTab] = useState<string | null>(PRICING)

	return (
		<BaseLayout>
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
		</BaseLayout>
	)
}

export default Pricing
