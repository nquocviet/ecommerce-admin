import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { ORDER_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import OrderDetails from '@/page-components/orders/[id]'
import { NextPageWithLayout } from '@/pages/_app'

const OrderDetailsPage: NextPageWithLayout = () => {
	return <OrderDetails />
}

OrderDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout
			href={{
				pathname: ROUTES.ORDERS,
				query: {
					tab: ORDER_TABS.ORDERS,
				},
			}}
			label="Back to orders"
		>
			{page}
		</DetailsLayout>
	)
}

export default OrderDetailsPage
