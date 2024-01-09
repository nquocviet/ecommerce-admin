import React from 'react'
import { ActionIcon, Button, Flex, MediaQuery, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	DotsThree,
	DownloadSimple,
	Plus,
	UploadSimple,
} from '@phosphor-icons/react'

import {
	ModalAddProduct,
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
			<MediaQuery smallerThan="md" styles={{ display: 'none' }}>
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
			</MediaQuery>
			<MediaQuery largerThan="md" styles={{ display: 'none' }}>
				<div className="ml-auto -mt-2">
					<Menu position="top-end" shadow="md" width={200}>
						<Menu.Target>
							<ActionIcon aria-label="More options">
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								icon={<UploadSimple size={16} />}
								onClick={openImportProduct}
							>
								Import products
							</Menu.Item>
							<Menu.Item
								icon={<DownloadSimple size={16} />}
								onClick={openExportProduct}
							>
								Export products
							</Menu.Item>
							<Menu.Item icon={<Plus size={16} />} onClick={openNewProduct}>
								New product
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</div>
			</MediaQuery>
			<ModalImportProduct
				opened={importProductOpened}
				onClose={closeImportProduct}
			/>
			<ModalExportProduct
				opened={exportProductOpened}
				onClose={closeExportProduct}
			/>
			<ModalAddProduct opened={newProductOpened} onClose={closeNewProduct} />
		</>
	)
}

export default ProductActions
