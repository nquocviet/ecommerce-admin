import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { CUSTOMER_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import CustomerGroups from '@/page-components/groups/[id]'
import { NextPageWithLayout } from '@/pages/_app'

const CustomerGroupsPage: NextPageWithLayout = () => {
	return <CustomerGroups />
}

CustomerGroupsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout
			label="Back to customer groups"
			href={{
				pathname: ROUTES.CUSTOMERS,
				query: { tab: CUSTOMER_TABS.GROUPS },
			}}
		>
			{page}
		</DetailsLayout>
	)
}

export default CustomerGroupsPage
