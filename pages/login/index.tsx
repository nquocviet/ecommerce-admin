import React from 'react'

import { withAuth } from '@/hocs'
import Login from '@/page-components/login'

const LoginPage = () => {
	return <Login />
}

export default withAuth({
	Component: LoginPage,
})
