import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Currencies from '@/page-components/settings/currencies'

const CurrenciesPage = () => {
	return <Currencies />
}

export default withAuth({
	Component: CurrenciesPage,
	allowedRoles: [ROLES.ADMIN],
})
