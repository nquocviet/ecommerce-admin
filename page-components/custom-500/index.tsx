import React from 'react'
import { AspectRatio, Image } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'

const Custom500 = () => {
	return (
		<>
			<Meta
				title={`500 Internal Server Error | ${APP_NAME}`}
				canonical={APP_DOMAIN}
			/>
			<AspectRatio
				ratio={7 / 5.5}
				maw={550}
				className="mb-10 w-full select-none"
			>
				<Image src="/images/500.png" alt="Internal server error" />
			</AspectRatio>
			<h1 className="mb-2 text-display-md font-bold md:text-display-lg">
				Internal server error
			</h1>
			<p className="mb-5 text-md text-gray-700 md:text-lg">
				Oops! Something went wrong. Try to refresh this page or feel free to
				contact us if the problem persists.
			</p>
		</>
	)
}

export default Custom500
