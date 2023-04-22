import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import CollectionDetail from '@/page-components/collections/CollectionDetail'

const CollectionDetailPage = () => {
	return <CollectionDetail />
}

export default withAuth({
	Component: CollectionDetailPage,
	allowedRoles: [ROLES.ADMIN],
})
