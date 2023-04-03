import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Orders from '@/page-components/orders'

const OrdersPage = () => {
	return <Orders />
}

export default withAuth({
	Component: OrdersPage,
	allowedRoles: [ROLES.ADMIN],
})
