import React from 'react'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

const Calendar = () => {
	return (
		<>
			<Meta
				title={`Calendar | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.CALENDAR}`}
			/>
			Calendar
		</>
	)
}

export default Calendar
