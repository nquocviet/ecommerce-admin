import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { PRODUCT_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import CollectionDetails from '@/page-components/collections/[id]'
import { NextPageWithLayout } from '@/pages/_app'

const CollectionDetailsPage: NextPageWithLayout = () => {
	return <CollectionDetails />
}

CollectionDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout
			href={{
				pathname: ROUTES.PRODUCTS,
				query: {
					tab: PRODUCT_TABS.COLLECTIONS,
				},
			}}
			label="Back to collections"
		>
			{page}
		</DetailsLayout>
	)
}

export default CollectionDetailsPage
