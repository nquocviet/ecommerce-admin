import React from 'react'

import { withAuth } from '@/hocs'
import Register from '@/page-components/register'

const RegisterPage = () => {
	return <Register />
}

export default withAuth({
	Component: RegisterPage,
})
