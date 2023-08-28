import React from 'react'
import { AspectRatio, Button, Image } from '@mantine/core'
import Link from 'next/link'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

const Custom404 = () => {
	return (
		<>
			<Meta title={`404 Page Not Found | ${APP_NAME}`} canonical={APP_DOMAIN} />
			<AspectRatio ratio={3 / 2} maw={650} className="mb-10 w-full select-none">
				<Image src="/images/404.png" alt="Page not found" />
			</AspectRatio>
			<h1 className="mb-2 text-display-md font-bold md:text-display-lg">
				Page not found
			</h1>
			<p className="mb-5 text-md text-gray-700 md:text-lg">
				Oops! Looks like you followed a bad link. If you think this is a problem
				with us, please tell us.
			</p>
			<Button
				color="primary"
				variant="filled"
				component={Link}
				href={ROUTES.HOME}
			>
				Go back home
			</Button>
		</>
	)
}

export default Custom404
