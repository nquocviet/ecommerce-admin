import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Team from '@/page-components/settings/team'

const TeamPage = () => {
	return <Team />
}

export default withAuth({
	Component: TeamPage,
	allowedRoles: [ROLES.ADMIN],
})
