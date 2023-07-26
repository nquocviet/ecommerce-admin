import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import FAQs from '@/page-components/faqs'
import { NextPageWithLayout } from '@/pages/_app'

const FAQsPage: NextPageWithLayout = () => {
	return <FAQs />
}

FAQsPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default FAQsPage
