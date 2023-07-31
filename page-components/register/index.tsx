import React from 'react'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

const Register = () => {
	return (
		<div>
			<Meta
				title={`Register | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.REGISTER}`}
			/>
			Register
		</div>
	)
}

export default Register
