import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Kanban from '@/page-components/kanban'

const KanbanPage = () => {
	return <Kanban />
}

export default withAuth({
	Component: KanbanPage,
	allowedRoles: [ROLES.ADMIN],
})
