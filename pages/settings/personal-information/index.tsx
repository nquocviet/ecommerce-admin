import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import PersonalInformation from '@/page-components/settings/personal-information/'

const PersonalInformationPage = () => {
	return <PersonalInformation />
}

export default withAuth({
	Component: PersonalInformationPage,
	allowedRoles: [ROLES.ADMIN],
})
