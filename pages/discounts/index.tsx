import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Discounts from '@/page-components/discounts'

const DiscountsPage = () => {
	return <Discounts />
}

export default withAuth({
	Component: DiscountsPage,
	allowedRoles: [ROLES.ADMIN],
})
