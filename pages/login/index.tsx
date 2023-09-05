import React, { ReactElement } from 'react'

import { AuthLayout } from '@/layouts'
import Login from '@/page-components/login'
import { NextPageWithLayout } from '@/pages/_app'

const LoginPage: NextPageWithLayout = () => {
	return <Login />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
	return <AuthLayout title="Welcome back!">{page}</AuthLayout>
}

export default LoginPage
