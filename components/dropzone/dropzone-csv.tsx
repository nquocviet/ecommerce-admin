import React from 'react'
import { clsx, Group, Text } from '@mantine/core'
import { Dropzone, DropzoneProps } from '@mantine/dropzone'

type DropzoneCSVProps = Omit<DropzoneProps, 'accept' | 'children'>

const CSV_MIME_TYPE = ['text/csv']

const DropzoneCSV = ({ onDrop, className, ...rest }: DropzoneCSVProps) => {
	return (
		<Dropzone
			{...rest}
			onDrop={onDrop}
			accept={CSV_MIME_TYPE}
			className={clsx(
				'flex min-h-[6.125rem] items-center justify-center',
				className
			)}
		>
			<Group position="center" spacing="xl">
				<div>
					<Text size="sm" align="center" className="font-medium">
						Drop your file here, or{' '}
						<Text component="span" className="text-primary-700">
							click to browse
						</Text>
						.
					</Text>
					<Text size="sm" align="center" className="text-gray-500">
						Only .csv files are supported.
					</Text>
				</div>
			</Group>
		</Dropzone>
	)
}

export default DropzoneCSV
