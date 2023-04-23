import React from 'react'
import { Text } from '@mantine/core'

import { DropzoneImage } from '@/components'

const ProductMedia = () => {
	return (
		<div className="mb-8">
			<Text className="text-sm text-gray-600">Add images to your product.</Text>
			<DropzoneImage
				onDrop={(files) => console.log('accepted files', files)}
				className="mt-4"
			/>
		</div>
	)
}

export default ProductMedia
