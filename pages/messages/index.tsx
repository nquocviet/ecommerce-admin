import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Messages from '@/page-components/messages'

const MessagesPage = () => {
	return <Messages />
}

export default withAuth({
	Component: MessagesPage,
	allowedRoles: [ROLES.ADMIN],
})
