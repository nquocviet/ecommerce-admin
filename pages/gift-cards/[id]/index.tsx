import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import GiftCardDetails from '@/page-components/gift-cards/[id]'

const GiftCardDetailsPage = () => {
	return <GiftCardDetails />
}

export default withAuth({
	Component: GiftCardDetailsPage,
	allowedRoles: [ROLES.ADMIN],
})
