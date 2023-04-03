import React from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { Details, Regions } from './components'

const Taxes = () => {
	return (
		<SettingsLayout>
			<Grid>
				<Grid.Col span={4}>
					<Regions />
				</Grid.Col>
				<Grid.Col span={8}>
					<Details />
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	)
}

export default Taxes
