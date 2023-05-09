import React from 'react'

import { PageTitle } from '@/components'
import { APP_NAME } from '@/constants/common'
import { BaseLayout } from '@/layouts'

const FAQs = () => {
	return (
		<BaseLayout>
			<PageTitle
				title="Frequently asked questions"
				description={`Manage the FAQs for your ${APP_NAME}.`}
			/>
		</BaseLayout>
	)
}

export default FAQs
