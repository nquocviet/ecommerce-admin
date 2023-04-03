import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Home from '@/page-components/home'

const HomePage = () => {
	return <Home />
}

export default withAuth({
	Component: HomePage,
	allowedRoles: [ROLES.ADMIN],
})
