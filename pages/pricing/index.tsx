import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Pricing from '@/page-components/pricing'

const PricingPage = () => {
	return <Pricing />
}

export default withAuth({
	Component: PricingPage,
	allowedRoles: [ROLES.ADMIN],
})
