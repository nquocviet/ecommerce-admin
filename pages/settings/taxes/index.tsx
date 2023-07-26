import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import Taxes from '@/page-components/settings/taxes'
import { NextPageWithLayout } from '@/pages/_app'

const TaxesPage: NextPageWithLayout = () => {
	return <Taxes />
}

TaxesPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default TaxesPage
