import React, { ReactElement } from 'react'

import { AuthLayout } from '@/layouts'
import ResetPassword from '@/page-components/reset-password'
import { NextPageWithLayout } from '@/pages/_app'

const ResetPasswordPage: NextPageWithLayout = () => {
	return <ResetPassword />
}

ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
	return <AuthLayout title="Reset your password">{page}</AuthLayout>
}

export default ResetPasswordPage
