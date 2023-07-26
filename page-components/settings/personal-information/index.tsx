import React from 'react'
import { Grid } from '@mantine/core'

import { PersonalForm } from '@/page-components/settings/components'

const PersonalInformation = () => {
	return (
		<Grid>
			<Grid.Col span={6}>
				<PersonalForm />
			</Grid.Col>
		</Grid>
	)
}

export default PersonalInformation
