import React from 'react'
import { Grid } from '@mantine/core'

import {
	DefaultCurrency,
	StoreCurrencies,
} from '@/page-components/settings/components'

const Currencies = () => {
	return (
		<Grid>
			<Grid.Col span={8}>
				<StoreCurrencies />
			</Grid.Col>
			<Grid.Col span={4}>
				<DefaultCurrency />
			</Grid.Col>
		</Grid>
	)
}

export default Currencies
