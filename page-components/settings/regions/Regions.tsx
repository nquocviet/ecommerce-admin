import React from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { Markets, RegionDetails } from './components'

const Regions = () => {
	return (
		<SettingsLayout>
			<Grid>
				<Grid.Col span={4}>
					<Markets />
				</Grid.Col>
				<Grid.Col span={8}>
					<RegionDetails />
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	)
}

export default Regions
