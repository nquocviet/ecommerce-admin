import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import Regions from '@/page-components/settings/regions'
import { NextPageWithLayout } from '@/pages/_app'

const RegionsPage: NextPageWithLayout = () => {
	return <Regions />
}

RegionsPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default RegionsPage
