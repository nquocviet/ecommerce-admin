import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import SaleChannels from '@/page-components/settings/sale-channels'

const SaleChannelsPage = () => {
	return <SaleChannels />
}

export default withAuth({
	Component: SaleChannelsPage,
	allowedRoles: [ROLES.ADMIN],
})
