import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Orders from '@/page-components/orders'
import { NextPageWithLayout } from '@/pages/_app'

const OrdersPage: NextPageWithLayout = () => {
	return <Orders />
}

OrdersPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default OrdersPage
