import React, { ReactElement } from 'react'

import { ErrorLayout } from '@/layouts'
import Custom500 from '@/page-components/custom-500'
import { NextPageWithLayout } from '@/pages/_app'

const Custom500Page: NextPageWithLayout = () => {
	return <Custom500 />
}

Custom500Page.getLayout = function getLayout(page: ReactElement) {
	return <ErrorLayout>{page}</ErrorLayout>
}

export default Custom500Page
