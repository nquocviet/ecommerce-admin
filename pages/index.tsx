import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Home from '@/page-components/home'
import { NextPageWithLayout } from '@/pages/_app'

const HomePage: NextPageWithLayout = () => {
	return <Home />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default HomePage
