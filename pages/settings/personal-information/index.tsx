import React, { ReactElement } from 'react'

import { SettingsLayout } from '@/layouts'
import PersonalInformation from '@/page-components/settings/personal-information/'
import { NextPageWithLayout } from '@/pages/_app'

const PersonalInformationPage: NextPageWithLayout = () => {
	return <PersonalInformation />
}

PersonalInformationPage.getLayout = function getLayout(page: ReactElement) {
	return <SettingsLayout>{page}</SettingsLayout>
}

export default PersonalInformationPage
