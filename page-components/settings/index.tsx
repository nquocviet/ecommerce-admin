import React from 'react'
import { Grid } from '@mantine/core'

import { PageTitle } from '@/components'
import { APP_NAME } from '@/constants/common'
import { SETTINGS } from '@/constants/settings'
import { BaseLayout } from '@/layouts'

import { SettingsCard } from './components'

const Settings = () => {
	return (
		<BaseLayout>
			<PageTitle
				title="Settings"
				description={`Manage the settings for your ${APP_NAME}.`}
			/>
			<Grid gutter={20}>
				{SETTINGS.map((settings, index) => (
					<Grid.Col key={index} md={6}>
						<SettingsCard {...settings} />
					</Grid.Col>
				))}
			</Grid>
		</BaseLayout>
	)
}

export default Settings
