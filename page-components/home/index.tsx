import React from 'react'
import { Flex, Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

import {
	LatestCustomers,
	SalesSummary,
	TopProducts,
	Transactions,
} from './components'

const Home = () => {
	return (
		<>
			<Meta
				title={`Dashboard | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.HOME}`}
			/>
			<Flex direction="column" align="stretch" gap={24} className="grow">
				<SalesSummary />
				<Grid gutter={24}>
					<Grid.Col lg={6} xl={4}>
						<LatestCustomers />
					</Grid.Col>
					<Grid.Col lg={6} xl={8}>
						<TopProducts />
					</Grid.Col>
				</Grid>
				<Transactions />
			</Flex>
		</>
	)
}

export default Home
