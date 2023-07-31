import React from 'react'
import { Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { Regions, TaxDetails } from '@/page-components/settings/components'

const Taxes = () => {
	return (
		<>
			<Meta
				title={`Tax Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.TAXES}`}
			/>
			<Grid>
				<Grid.Col md={4}>
					<Regions />
				</Grid.Col>
				<Grid.Col md={8}>
					<TaxDetails />
				</Grid.Col>
			</Grid>
		</>
	)
}

export default Taxes
