import React from 'react'
import { Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { Markets, RegionDetails } from '@/page-components/settings/components'

const Regions = () => {
	return (
		<>
			<Meta
				title={`Region Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.REGIONS}`}
			/>
			<Grid>
				<Grid.Col md={4}>
					<Markets />
				</Grid.Col>
				<Grid.Col md={8}>
					<RegionDetails />
				</Grid.Col>
			</Grid>
		</>
	)
}

export default Regions
