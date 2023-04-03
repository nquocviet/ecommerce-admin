import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Customers from '@/page-components/customers'

const CustomersPage = () => {
	return <Customers />
}

export default withAuth({
	Component: CustomersPage,
	allowedRoles: [ROLES.ADMIN],
})
