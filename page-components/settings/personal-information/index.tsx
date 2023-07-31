import React from 'react'
import { Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { PersonalForm } from '@/page-components/settings/components'

const PersonalInformation = () => {
	return (
		<>
			<Meta
				title={`Personal Information Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.PERSONAL_INFORMATION}`}
			/>
			<Grid>
				<Grid.Col md={6}>
					<PersonalForm />
				</Grid.Col>
			</Grid>
		</>
	)
}

export default PersonalInformation
