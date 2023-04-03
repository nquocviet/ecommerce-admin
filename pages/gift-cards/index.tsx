import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import GiftCards from '@/page-components/gift-cards'

const GiftCardsPage = () => {
	return <GiftCards />
}

export default withAuth({
	Component: GiftCardsPage,
	allowedRoles: [ROLES.ADMIN],
})
