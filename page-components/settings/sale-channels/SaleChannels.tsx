import React from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { ChannelDetails, Channels } from './components'

const SaleChannels = () => {
	return (
		<SettingsLayout>
			<Grid>
				<Grid.Col span={4}>
					<Channels />
				</Grid.Col>
				<Grid.Col span={8}>
					<ChannelDetails />
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	)
}

export default SaleChannels
