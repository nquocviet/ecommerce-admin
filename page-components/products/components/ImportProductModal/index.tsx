import React from 'react'
import { Button, Flex, Group, Modal, Text } from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import { DownloadSimple, File } from '@phosphor-icons/react'

import { ModalAction } from '@/components'

type ImportProductModalProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

const CSV_MIME_TYPE = ['text/csv']

const ImportProductModal = ({ opened, onClose }: ImportProductModalProps) => {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Import products list"
			size="xl"
			centered
		>
			<Text className="font-semibold">Import products list</Text>
			<Text className="text-gray-600">
				Through imports you can add or update products. To update existing
				products/variants you must set an existing id in the Product/Variant id
				columns. If the value is unset a new record will be created. You will be
				asked for confirmation before we import products.
			</Text>
			<Dropzone
				onDrop={(files) => console.log('accepted files', files)}
				accept={CSV_MIME_TYPE}
				className="mt-6 mb-8 flex min-h-[6.125rem] items-center justify-center"
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
						<Text size="sm" align="center" className="text-gray-600">
							Only .csv files are supported.
						</Text>
					</div>
				</Group>
			</Dropzone>
			<Text className="font-semibold">
				Unsure about how to arrange your list?
			</Text>
			<Text className="text-gray-600">
				Download the template below to ensure you are following the correct
				format.
			</Text>
			<Flex className="mt-6 flex items-center justify-between rounded-xl border border-solid border-gray-200 py-6 pl-4 pr-6">
				<Flex align="center" gap={12}>
					<File size={28} className="text-primary-700" />
					<div className="text-sm text-gray-600">
						<Text className="font-medium">medusa-template.csv</Text>
						<Text>2.90 KiB</Text>
					</div>
				</Flex>
				<DownloadSimple size={20} className="text-gray-600" />
			</Flex>
			<ModalAction>
				<Button color="gray" variant="outline" onClick={() => onClose()}>
					Cancel
				</Button>
				<Button>Import list</Button>
			</ModalAction>
		</Modal>
	)
}

export default ImportProductModal
