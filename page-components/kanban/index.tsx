import React from 'react'
import { Grid } from '@mantine/core'

import { PageTitle } from '@/components'
import { BaseLayout } from '@/layouts'

const Kanban = () => {
	return (
		<BaseLayout fluid>
			<PageTitle title="Kanban" />
			<Grid>
				<Grid.Col></Grid.Col>
				<Grid.Col></Grid.Col>
				<Grid.Col></Grid.Col>
				<Grid.Col></Grid.Col>
			</Grid>
		</BaseLayout>
	)
}

export default Kanban
