import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DownloadSimple, Plus, UploadSimple } from '@phosphor-icons/react'

import {
	ModalAddNewProduct,
	ModalExportProduct,
	ModalImportProduct,
} from '@/page-components/products/components'

const ProductActions = () => {
	const [
		importProductOpened,
		{ open: openImportProduct, close: closeImportProduct },
	] = useDisclosure(false)
	const [
		exportProductOpened,
		{ open: openExportProduct, close: closeExportProduct },
	] = useDisclosure(false)
	const [newProductOpened, { open: openNewProduct, close: closeNewProduct }] =
		useDisclosure(false)

	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<UploadSimple size={16} />}
					onClick={openImportProduct}
				>
					Import products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<DownloadSimple size={16} />}
					onClick={openExportProduct}
				>
					Export products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
					onClick={openNewProduct}
				>
					New product
				</Button>
			</Flex>
			<ModalImportProduct
				opened={importProductOpened}
				onClose={closeImportProduct}
			/>
			<ModalExportProduct
				opened={exportProductOpened}
				onClose={closeExportProduct}
			/>
			<ModalAddNewProduct opened={newProductOpened} onClose={closeNewProduct} />
		</>
	)
}

export default ProductActions
