import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import CollectionDetails from '@/page-components/collections/[id]'

const CollectionDetailsPage = () => {
	return <CollectionDetails />
}

export default withAuth({
	Component: CollectionDetailsPage,
	allowedRoles: [ROLES.ADMIN],
})
