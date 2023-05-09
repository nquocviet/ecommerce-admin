import React from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { Regions, TaxDetails } from './components'

const Taxes = () => {
	return (
		<SettingsLayout>
			<Grid>
				<Grid.Col span={4}>
					<Regions />
				</Grid.Col>
				<Grid.Col span={8}>
					<TaxDetails />
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	)
}

export default Taxes
