import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import ReturnReasons from '@/page-components/settings/return-reasons'

const ReturnReasonsPage = () => {
	return <ReturnReasons />
}

export default withAuth({
	Component: ReturnReasonsPage,
	allowedRoles: [ROLES.ADMIN],
})
