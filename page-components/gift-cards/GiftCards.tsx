import React, { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { GIFT_CARD_TABS } from '@/constants/tabs'
import { BaseLayout } from '@/layouts'

import { GiftCardActions, GiftCardsTab, ProductGiftCard } from './components'

const { GIFT_CARDS } = GIFT_CARD_TABS

const GiftCards = () => {
	const [activeTab, setActiveTab] = useState<string | null>(GIFT_CARDS)

	return (
		<BaseLayout>
			<Paper shadow="xs" p="xl">
				<ProductGiftCard />
			</Paper>
			<Paper shadow="xs" p="xl" className="grow">
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
		</BaseLayout>
	)
}

export default GiftCards
