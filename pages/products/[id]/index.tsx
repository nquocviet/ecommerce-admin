import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import ProductDetail from '@/page-components/products/ProductDetail'

const ProductDetailPage = () => {
	return <ProductDetail />
}

export default withAuth({
	Component: ProductDetailPage,
	allowedRoles: [ROLES.ADMIN],
})
