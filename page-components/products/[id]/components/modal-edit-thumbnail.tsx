import React from 'react'
import { Text } from '@mantine/core'

import { DropzoneImage, Modal, ModalOpenedProps } from '@/components'

const ModalEditMedia = (props: ModalOpenedProps) => {
	return (
		<Modal title="Upload thumbnail" size="xl" confirmText="Save" {...props}>
			<form>
				<Text className="font-semibold">Thumbnail</Text>
				<Text className="text-sm text-gray-500">
					Used to represent your product during checkout, social sharing and
					more.
				</Text>
				<DropzoneImage
					onDrop={(file) => console.log('accepted file', file)}
					multiple={false}
					className="my-4"
				/>
			</form>
		</Modal>
	)
}

export default ModalEditMedia
