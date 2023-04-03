import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Shipping from '@/page-components/settings/shipping/'

const ShippingPage = () => {
	return <Shipping />
}

export default withAuth({
	Component: ShippingPage,
	allowedRoles: [ROLES.ADMIN],
})
