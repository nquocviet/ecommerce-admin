import React from 'react'
import { clsx, Group, Text } from '@mantine/core'
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone'

type DropzoneImageProps = Omit<DropzoneProps, 'accept' | 'children'>

const DropzoneImage = ({ onDrop, className, ...rest }: DropzoneImageProps) => {
	return (
		<Dropzone
			{...rest}
			onDrop={onDrop}
			accept={IMAGE_MIME_TYPE}
			className={clsx(
				'flex min-h-[6.125rem] items-center justify-center',
				className
			)}
		>
			<Group position="center" spacing="xl">
				<div>
					<Text size="sm" align="center" className="font-medium">
						Drop your images here, or{' '}
						<Text component="span" className="text-primary-700">
							click to browse
						</Text>
						.
					</Text>
					<Text size="sm" align="center" className="text-gray-600">
						1200 x 1600 (3:4) recommended, up to 10MB each
					</Text>
				</div>
			</Group>
		</Dropzone>
	)
}

export default DropzoneImage
