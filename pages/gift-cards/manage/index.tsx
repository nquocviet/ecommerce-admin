import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import GiftCardManage from '@/page-components/gift-cards/manage'

const GiftCardManagePage = () => {
	return <GiftCardManage />
}

export default withAuth({
	Component: GiftCardManagePage,
	allowedRoles: [ROLES.ADMIN],
})
