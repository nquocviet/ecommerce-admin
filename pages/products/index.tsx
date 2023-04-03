import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Products from '@/page-components/products'

const ProductsPage = () => {
	return <Products />
}

export default withAuth({
	Component: ProductsPage,
	allowedRoles: [ROLES.ADMIN],
})
