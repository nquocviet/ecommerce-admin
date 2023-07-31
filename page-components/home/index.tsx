import React from 'react'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

const Home = () => {
	return (
		<>
			<Meta
				title={`Dashboard | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.HOME}`}
			/>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore
			cupiditate accusamus repellat, quae fuga error fugiat, iusto aliquam
			maiores doloribus dicta minima incidunt.
		</>
	)
}

export default Home
