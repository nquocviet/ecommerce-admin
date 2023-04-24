import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { DownloadSimple, Plus, UploadSimple } from '@phosphor-icons/react'

import AddNewProductModal from '../AddNewProductModal'
import ExportProductModal from '../ExportProductModal'
import ImportProductModal from '../ImportProductModal'

const ProductActions = () => {
	const [importProductOpened, setImportProductOpened] = useToggle()
	const [exportProductOpened, setExportProductOpened] = useToggle()
	const [newProductOpened, setNewProductOpened] = useToggle()

	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<UploadSimple size={16} />}
					onClick={() => setImportProductOpened(true)}
				>
					Import products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<DownloadSimple size={16} />}
					onClick={() => setExportProductOpened(true)}
				>
					Export products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
					onClick={() => setNewProductOpened(true)}
				>
					New product
				</Button>
			</Flex>
			<ImportProductModal
				opened={importProductOpened}
				onClose={setImportProductOpened}
			/>
			<ExportProductModal
				opened={exportProductOpened}
				onClose={setExportProductOpened}
			/>
			<AddNewProductModal
				opened={newProductOpened}
				onClose={setNewProductOpened}
			/>
		</>
	)
}

export default ProductActions
