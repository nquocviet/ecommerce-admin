import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import StoreDetails from '@/page-components/settings/store-details'
import { NextPageWithLayout } from '@/pages/_app'

const StoreDetailsPage: NextPageWithLayout = () => {
	return <StoreDetails />
}

StoreDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default StoreDetailsPage
