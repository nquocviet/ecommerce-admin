import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import ReturnReasons from '@/page-components/settings/return-reasons'
import { NextPageWithLayout } from '@/pages/_app'

const ReturnReasonsPage: NextPageWithLayout = () => {
	return <ReturnReasons />
}

ReturnReasonsPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default ReturnReasonsPage
