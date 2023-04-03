import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Taxes from '@/page-components/settings/taxes'

const TaxesPage = () => {
	return <Taxes />
}

export default withAuth({
	Component: TaxesPage,
	allowedRoles: [ROLES.ADMIN],
})
