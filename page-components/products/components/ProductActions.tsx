import React from 'react'
import { Button, Flex } from '@mantine/core'
import { DownloadSimple, Plus, UploadSimple } from '@phosphor-icons/react'

const ProductActions = () => {
	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<UploadSimple size={16} />}
				>
					Import Products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<DownloadSimple size={16} />}
				>
					Export Products
				</Button>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
				>
					New Product
				</Button>
			</Flex>
		</>
	)
}

export default ProductActions
