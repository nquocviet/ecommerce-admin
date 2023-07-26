import React from 'react'
import { Grid } from '@mantine/core'

import { Regions, TaxDetails } from '@/page-components/settings/components'

const Taxes = () => {
	return (
		<Grid>
			<Grid.Col span={4}>
				<Regions />
			</Grid.Col>
			<Grid.Col span={8}>
				<TaxDetails />
			</Grid.Col>
		</Grid>
	)
}

export default Taxes
