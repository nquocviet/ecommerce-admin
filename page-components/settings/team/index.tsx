import { useState } from 'react'
import { Tabs } from '@mantine/core'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { TEAM_TABS } from '@/constants/tabs'
import { useActiveTab } from '@/hooks'
import { TeamActions, TeamsTab } from '@/page-components/settings/components'

const { TEAM } = TEAM_TABS

const Team = () => {
	const [activeTab, setActiveTab] = useState<string | null>(TEAM)

	useActiveTab(activeTab, setActiveTab)

	return (
		<>
			<Meta
				title={`Team Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.TEAM}`}
			/>
			<Paper className="grow">
				<Tabs
					value={activeTab}
					onTabChange={(tab) => setActiveTab(tab)}
					keepMounted={false}
				>
					<Tabs.List>
						<Tabs.Tab value={TEAM}>Team</Tabs.Tab>
						{activeTab === TEAM && <TeamActions />}
					</Tabs.List>

					<Tabs.Panel value={TEAM}>
						<TeamsTab />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</>
	)
}

export default Team
