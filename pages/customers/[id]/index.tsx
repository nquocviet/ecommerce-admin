import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import CustomerDetails from '@/page-components/customers/[id]'

const CustomerDetailsPage = () => {
	return <CustomerDetails />
}

export default withAuth({
	Component: CustomerDetailsPage,
	allowedRoles: [ROLES.ADMIN],
})
