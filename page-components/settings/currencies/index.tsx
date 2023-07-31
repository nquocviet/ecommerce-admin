import React from 'react'
import { Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import {
	DefaultCurrency,
	StoreCurrencies,
} from '@/page-components/settings/components'

const Currencies = () => {
	return (
		<>
			<Meta
				title={`Currency Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.CURRENCIES}`}
			/>
			<Grid>
				<Grid.Col md={8}>
					<StoreCurrencies />
				</Grid.Col>
				<Grid.Col md={4}>
					<DefaultCurrency />
				</Grid.Col>
			</Grid>
		</>
	)
}

export default Currencies
