import React from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { StoreForm } from './components'

const StoreDetails = () => {
	return (
		<SettingsLayout>
			<Grid>
				<Grid.Col span={6}>
					<StoreForm />
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	)
}

export default StoreDetails
