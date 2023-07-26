import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { PRODUCT_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import ProductDetails from '@/page-components/products/[id]'
import { NextPageWithLayout } from '@/pages/_app'

const ProductDetailsPage: NextPageWithLayout = () => {
	return <ProductDetails />
}

ProductDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout
			href={{
				pathname: ROUTES.PRODUCTS,
				query: {
					tab: PRODUCT_TABS.PRODUCTS,
				},
			}}
			label="Back to products"
		>
			{page}
		</DetailsLayout>
	)
}

export default ProductDetailsPage
