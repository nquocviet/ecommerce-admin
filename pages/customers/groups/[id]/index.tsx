import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import CustomerGroups from '@/page-components/customers/groups/[id]'

const CustomerGroupsPage = () => {
	return <CustomerGroups />
}

export default withAuth({
	Component: CustomerGroupsPage,
	allowedRoles: [ROLES.ADMIN],
})
