import React from 'react'

import { PageTitle } from '@/components'
import { APP_NAME } from '@/constants/common'

const FAQs = () => {
	return (
		<PageTitle
			title="Frequently asked questions"
			description={`Manage the FAQs for your ${APP_NAME}.`}
		/>
	)
}

export default FAQs
