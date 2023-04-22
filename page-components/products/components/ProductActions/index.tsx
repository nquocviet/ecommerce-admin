import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { DownloadSimple, Plus, UploadSimple } from '@phosphor-icons/react'

import AddNewProductModal from '../AddNewProductModal'
import ExportProductModal from '../ExportProductModal'
import ImportProductModal from '../ImportProductModal'

const ProductActions = () => {
	const [importProductModalOpened, setImportProductModalOpened] = useToggle()
	const [exportProductModalOpened, setExportProductModalOpened] = useToggle()
	const [newProductModalOpened, setNewProductModalOpened] = useToggle()

	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<UploadSimple size={16} />}
					onClick={() => setImportProductModalOpened(true)}
				>
					Import Products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<DownloadSimple size={16} />}
					onClick={() => setExportProductModalOpened(true)}
				>
					Export Products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
					onClick={() => setNewProductModalOpened(true)}
				>
					New Product
				</Button>
			</Flex>
			<ImportProductModal
				opened={importProductModalOpened}
				onClose={setImportProductModalOpened}
			/>
			<ExportProductModal
				opened={exportProductModalOpened}
				onClose={setExportProductModalOpened}
			/>
			<AddNewProductModal
				opened={newProductModalOpened}
				onClose={setNewProductModalOpened}
			/>
		</>
	)
}

export default ProductActions
