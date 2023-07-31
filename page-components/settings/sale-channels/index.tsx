import React from 'react'
import { Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { ChannelDetails, Channels } from '@/page-components/settings/components'

const SaleChannels = () => {
	return (
		<>
			<Meta
				title={`Sale Channel Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.SALE_CHANNELS}`}
			/>
			<Grid>
				<Grid.Col md={4}>
					<Channels />
				</Grid.Col>
				<Grid.Col md={8}>
					<ChannelDetails />
				</Grid.Col>
			</Grid>
		</>
	)
}

export default SaleChannels
