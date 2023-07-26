import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import SaleChannels from '@/page-components/settings/sale-channels'
import { NextPageWithLayout } from '@/pages/_app'

const SaleChannelsPage: NextPageWithLayout = () => {
	return <SaleChannels />
}

SaleChannelsPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default SaleChannelsPage
