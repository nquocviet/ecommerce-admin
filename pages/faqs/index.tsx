import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import FAQs from '@/page-components/faqs'

const FAQsPage = () => {
	return <FAQs />
}

export default withAuth({
	Component: FAQsPage,
	allowedRoles: [ROLES.ADMIN],
})
