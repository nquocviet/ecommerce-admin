import React from 'react'
import { Grid } from '@mantine/core'

import { PageTitle } from '@/components'

const Kanban = () => {
	return (
		<>
			<PageTitle title="Kanban" />
			<Grid>
				<Grid.Col></Grid.Col>
				<Grid.Col></Grid.Col>
				<Grid.Col></Grid.Col>
				<Grid.Col></Grid.Col>
			</Grid>
		</>
	)
}

export default Kanban
