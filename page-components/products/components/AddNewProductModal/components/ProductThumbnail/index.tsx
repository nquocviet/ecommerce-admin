import React from 'react'
import { Text } from '@mantine/core'

import { DropzoneImage } from '@/components'

const ProductThumbnail = () => {
	return (
		<div className="mb-8">
			<Text className="text-sm text-gray-600">
				Used to represent your product during checkout, social sharing and more.
			</Text>
			<DropzoneImage
				onDrop={(files) => console.log('accepted files', files)}
				className="mt-4"
			/>
		</div>
	)
}

export default ProductThumbnail
