import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import StoreDetails from '@/page-components/settings/store-details'

const StoreDetailsPage = () => {
	return <StoreDetails />
}

export default withAuth({
	Component: StoreDetailsPage,
	allowedRoles: [ROLES.ADMIN],
})
