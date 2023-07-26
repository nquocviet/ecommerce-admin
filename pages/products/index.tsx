import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Products from '@/page-components/products'
import { NextPageWithLayout } from '@/pages/_app'

const ProductsPage: NextPageWithLayout = () => {
	return <Products />
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default ProductsPage
