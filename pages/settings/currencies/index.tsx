import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import Currencies from '@/page-components/settings/currencies'
import { NextPageWithLayout } from '@/pages/_app'

const CurrenciesPage: NextPageWithLayout = () => {
	return <Currencies />
}

CurrenciesPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default CurrenciesPage
