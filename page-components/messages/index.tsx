import React from 'react'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

const Messages = () => {
	return (
		<>
			<Meta
				title={`Messages | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.MESSAGES}`}
			/>
			Messages
		</>
	)
}

export default Messages
