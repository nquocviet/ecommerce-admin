import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { DetailsLayout } from '@/layouts'
import GiftCardManage from '@/page-components/gift-cards/manage'
import { NextPageWithLayout } from '@/pages/_app'

const GiftCardManagePage: NextPageWithLayout = () => {
	return <GiftCardManage />
}

GiftCardManagePage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout href={ROUTES.GIFT_CARDS} label="Back to Gift cards">
			{page}
		</DetailsLayout>
	)
}

export default GiftCardManagePage
