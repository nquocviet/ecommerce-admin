import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { DetailsLayout } from '@/layouts'
import GiftCardDetails from '@/page-components/gift-cards/[id]'
import { NextPageWithLayout } from '@/pages/_app'

const GiftCardDetailsPage: NextPageWithLayout = () => {
	return <GiftCardDetails />
}

GiftCardDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout href={ROUTES.GIFT_CARDS} label="Back to Gift cards">
			{page}
		</DetailsLayout>
	)
}

export default GiftCardDetailsPage
