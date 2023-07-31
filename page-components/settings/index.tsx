import React from 'react'
import { Grid } from '@mantine/core'

import { Meta, PageTitle } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { SETTINGS } from '@/constants/settings'
import { SettingsCard } from '@/page-components/settings/components'

const Settings = () => {
	return (
		<>
			<Meta
				title={`Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.DEFAULT}`}
			/>
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
		</>
	)
}

export default Settings
