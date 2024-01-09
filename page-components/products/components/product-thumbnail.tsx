import React from 'react'
import { Text } from '@mantine/core'

import { DropzoneImage } from '@/components'

const ProductThumbnail = () => {
	return (
		<div>
			<Text className="text-sm text-gray-500">
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
