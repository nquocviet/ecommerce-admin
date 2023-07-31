import { useState } from 'react'
import { Tabs } from '@mantine/core'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { PRODUCT_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import {
	CollectionActions,
	CollectionsTab,
	ProductActions,
	ProductsTab,
} from '@/page-components/products/components'

const { PRODUCTS, COLLECTIONS } = PRODUCT_TABS

const Products = () => {
	const [activeTab, setActiveTab] = useState<string | null>(PRODUCTS)

	useActiveTab(activeTab, setActiveTab)

	return (
		<>
			<Meta
				title={`Product Management | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.PRODUCTS}`}
			/>
			<Paper className="grow">
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
		</>
	)
}

export default Products
