import React from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { PersonalForm } from './components'

const PersonalInformation = () => {
	return (
		<SettingsLayout>
			<Grid>
				<Grid.Col span={6}>
					<PersonalForm />
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	)
}

export default PersonalInformation
