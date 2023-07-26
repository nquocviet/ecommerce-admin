import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Settings from '@/page-components/settings'
import { NextPageWithLayout } from '@/pages/_app'

const SettingsPage: NextPageWithLayout = () => {
	return <Settings />
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default SettingsPage
