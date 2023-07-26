import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { CUSTOMER_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import CustomerDetails from '@/page-components/customers/[id]'
import { NextPageWithLayout } from '@/pages/_app'

const CustomerDetailsPage: NextPageWithLayout = () => {
	return <CustomerDetails />
}

CustomerDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout
			label="Back to customers"
			href={{
				pathname: ROUTES.CUSTOMERS,
				query: { tab: CUSTOMER_TABS.CUSTOMERS },
			}}
		>
			{page}
		</DetailsLayout>
	)
}

export default CustomerDetailsPage
