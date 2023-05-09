import React from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { DefaultCurrency, StoreCurrencies } from './components'

const Currencies = () => {
	return (
		<SettingsLayout>
			<Grid>
				<Grid.Col span={8}>
					<StoreCurrencies />
				</Grid.Col>
				<Grid.Col span={4}>
					<DefaultCurrency />
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	)
}

export default Currencies
