import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Discounts from '@/page-components/discounts'
import { NextPageWithLayout } from '@/pages/_app'

const DiscountsPage: NextPageWithLayout = () => {
	return <Discounts />
}

DiscountsPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default DiscountsPage
