import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Settings from '@/page-components/settings'

const SettingsPage = () => {
	return <Settings />
}

export default withAuth({
	Component: SettingsPage,
	allowedRoles: [ROLES.ADMIN],
})
