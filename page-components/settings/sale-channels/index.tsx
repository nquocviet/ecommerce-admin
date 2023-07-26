import React from 'react'
import { Grid } from '@mantine/core'

import { ChannelDetails, Channels } from '@/page-components/settings/components'

const SaleChannels = () => {
	return (
		<Grid>
			<Grid.Col span={4}>
				<Channels />
			</Grid.Col>
			<Grid.Col span={8}>
				<ChannelDetails />
			</Grid.Col>
		</Grid>
	)
}

export default SaleChannels
