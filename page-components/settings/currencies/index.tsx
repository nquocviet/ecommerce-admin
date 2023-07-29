import React from 'react'
import { Grid } from '@mantine/core'

import {
	DefaultCurrency,
	StoreCurrencies,
} from '@/page-components/settings/components'

const Currencies = () => {
	return (
		<Grid>
			<Grid.Col md={8}>
				<StoreCurrencies />
			</Grid.Col>
			<Grid.Col md={4}>
				<DefaultCurrency />
			</Grid.Col>
		</Grid>
	)
}

export default Currencies
