import { useState } from 'react'
import { Tabs } from '@mantine/core'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { GIFT_CARD_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import {
	GiftCardActions,
	GiftCardsTab,
	ProductGiftCard,
} from '@/page-components/gift-cards/components'

const { GIFT_CARDS } = GIFT_CARD_TABS

const GiftCards = () => {
	const [activeTab, setActiveTab] = useState<string | null>(GIFT_CARDS)

	useActiveTab(activeTab, setActiveTab)

	return (
		<>
			<Meta
				title={`Gift Card Management | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.GIFT_CARDS}`}
			/>
			<Paper>
				<ProductGiftCard />
			</Paper>
			<Paper className="grow">
				<Tabs
					value={activeTab}
					onTabChange={(tab) => setActiveTab(tab)}
					keepMounted={false}
				>
					<Tabs.List>
						<Tabs.Tab value={GIFT_CARDS}>Gift Cards</Tabs.Tab>
						{activeTab === GIFT_CARDS && <GiftCardActions />}
					</Tabs.List>

					<Tabs.Panel value={GIFT_CARDS}>
						<GiftCardsTab />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</>
	)
}

export default GiftCards
