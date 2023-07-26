import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Customers from '@/page-components/customers'
import { NextPageWithLayout } from '@/pages/_app'

const CustomersPage: NextPageWithLayout = () => {
	return <Customers />
}

CustomersPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default CustomersPage
