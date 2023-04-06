import { useState } from 'react'
import { Paper, Tabs } from '@mantine/core'

import { TEAM_TABS } from '@/constants/tabs'
import { SettingsLayout } from '@/layouts'

import { TeamActions, TeamsTab } from './components'

const { TEAM } = TEAM_TABS

const Team = () => {
	const [activeTab, setActiveTab] = useState<string | null>(TEAM)

	return (
		<SettingsLayout>
			<Paper shadow="xs" p="xl" className="grow">
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
		</SettingsLayout>
	)
}

export default Team
