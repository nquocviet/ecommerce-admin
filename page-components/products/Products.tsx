import { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { PRODUCT_TABS } from '@/constants/tabs'
import { BaseLayout } from '@/layouts'

import {
	CollectionActions,
	CollectionsTab,
	ProductActions,
	ProductsTab,
} from './components'

const { PRODUCTS, COLLECTIONS } = PRODUCT_TABS

const Products = () => {
	const [activeTab, setActiveTab] = useState<string | null>(PRODUCTS)

	return (
		<BaseLayout>
			<Paper shadow="xs" p="xl" className="grow">
				<Tabs
					value={activeTab}
					onTabChange={(tab) => setActiveTab(tab)}
					keepMounted={false}
				>
					<Tabs.List>
						<Tabs.Tab value={PRODUCTS}>Products</Tabs.Tab>
						<Tabs.Tab value={COLLECTIONS}>Collections</Tabs.Tab>
						{activeTab === PRODUCTS && <ProductActions />}
						{activeTab === COLLECTIONS && <CollectionActions />}
					</Tabs.List>

					<Tabs.Panel value={PRODUCTS}>
						<ProductsTab />
					</Tabs.Panel>

					<Tabs.Panel value={COLLECTIONS}>
						<CollectionsTab />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</BaseLayout>
	)
}

export default Products
