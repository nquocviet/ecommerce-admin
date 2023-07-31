import { useState } from 'react'
import { Tabs } from '@mantine/core'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
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
			<Meta
				title={`Pricing Management | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.PRICING}`}
			/>
			<Paper className="grow">
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
