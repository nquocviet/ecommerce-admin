import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import Calendar from '@/page-components/calendar'

const CalendarPage = () => {
	return <Calendar />
}

export default withAuth({
	Component: CalendarPage,
	allowedRoles: [ROLES.ADMIN],
})
