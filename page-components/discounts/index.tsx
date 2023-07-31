import { useState } from 'react'
import { Tabs } from '@mantine/core'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { DISCOUNT_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import {
	DiscountActions,
	DiscountsTab,
} from '@/page-components/discounts/components'

const { DISCOUNTS } = DISCOUNT_TABS

const Discounts = () => {
	const [activeTab, setActiveTab] = useState<string | null>(DISCOUNTS)

	useActiveTab(activeTab, setActiveTab)

	return (
		<>
			<Meta
				title={`Discount Management | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.DISCOUNTS}`}
			/>
			<Paper className="grow">
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
		</>
	)
}

export default Discounts
