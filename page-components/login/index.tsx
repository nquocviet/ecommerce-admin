import React from 'react'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

const Login = () => {
	return (
		<div>
			<Meta
				title={`Login | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.LOGIN}`}
			/>
			Login
		</div>
	)
}

export default Login
