import React from 'react'
import { Grid } from '@mantine/core'

import { StoreForm } from '@/page-components/settings/components'

const StoreDetails = () => {
	return (
		<Grid>
			<Grid.Col md={6}>
				<StoreForm />
			</Grid.Col>
		</Grid>
	)
}

export default StoreDetails
