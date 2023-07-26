import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import Team from '@/page-components/settings/team'
import { NextPageWithLayout } from '@/pages/_app'

const TeamPage: NextPageWithLayout = () => {
	return <Team />
}

TeamPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default TeamPage
