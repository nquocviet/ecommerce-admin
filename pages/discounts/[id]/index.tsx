import React, { ReactElement } from 'react'

import { ROUTES } from '@/constants/routes'
import { DISCOUNT_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import DiscountDetails from '@/page-components/discounts/[id]'
import { NextPageWithLayout } from '@/pages/_app'

const DiscountDetailsPage: NextPageWithLayout = () => {
	return <DiscountDetails />
}

DiscountDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<DetailsLayout
			href={{
				pathname: ROUTES.DISCOUNTS,
				query: {
					tab: DISCOUNT_TABS.DISCOUNTS,
				},
			}}
			label="Back to discounts"
		>
			{page}
		</DetailsLayout>
	)
}

export default DiscountDetailsPage
