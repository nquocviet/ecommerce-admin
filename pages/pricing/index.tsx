import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Pricing from '@/page-components/pricing'
import { NextPageWithLayout } from '@/pages/_app'

const PricingPage: NextPageWithLayout = () => {
	return <Pricing />
}

PricingPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default PricingPage
