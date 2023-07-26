import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import GiftCards from '@/page-components/gift-cards'
import { NextPageWithLayout } from '@/pages/_app'

const GiftCardsPage: NextPageWithLayout = () => {
	return <GiftCards />
}

GiftCardsPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default GiftCardsPage
