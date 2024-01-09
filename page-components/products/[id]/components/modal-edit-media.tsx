import React from 'react'
import { Text } from '@mantine/core'

import { DropzoneImage, Modal, ModalOpenedProps } from '@/components'

const ModalEditMedia = (props: ModalOpenedProps) => {
	return (
		<Modal title="Edit media" size="xl" confirmText="Save" {...props}>
			<form>
				<Text className="font-semibold">Media</Text>
				<Text className="text-sm text-gray-500">
					Add images to your product.
				</Text>
				<DropzoneImage
					onDrop={(file) => console.log('accepted file', file)}
					className="my-4"
				/>
			</form>
		</Modal>
	)
}

export default ModalEditMedia
