import React, { ReactElement } from 'react'

import { ErrorLayout } from '@/layouts'
import Custom404 from '@/page-components/custom-404'
import { NextPageWithLayout } from '@/pages/_app'

const Custom404Page: NextPageWithLayout = () => {
	return <Custom404 />
}

Custom404Page.getLayout = function getLayout(page: ReactElement) {
	return <ErrorLayout>{page}</ErrorLayout>
}

export default Custom404Page
