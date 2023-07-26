import React from 'react'
import { Grid } from '@mantine/core'

import { Markets, RegionDetails } from '@/page-components/settings/components'

const Regions = () => {
	return (
		<Grid>
			<Grid.Col span={4}>
				<Markets />
			</Grid.Col>
			<Grid.Col span={8}>
				<RegionDetails />
			</Grid.Col>
		</Grid>
	)
}

export default Regions
