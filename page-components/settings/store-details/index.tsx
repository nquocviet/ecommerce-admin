import React from 'react'
import { Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { StoreForm } from '@/page-components/settings/components'

const StoreDetails = () => {
	return (
		<>
			<Meta
				title={`Store Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.STORE_DETAILS}`}
			/>
			<Grid>
				<Grid.Col md={6}>
					<StoreForm />
				</Grid.Col>
			</Grid>
		</>
	)
}

export default StoreDetails
