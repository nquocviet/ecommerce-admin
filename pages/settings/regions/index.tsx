import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Regions from '@/page-components/settings/regions'

const RegionsPage = () => {
	return <Regions />
}

export default withAuth({
	Component: RegionsPage,
	allowedRoles: [ROLES.ADMIN],
})
