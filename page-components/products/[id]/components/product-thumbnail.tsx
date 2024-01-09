import React from 'react'
import { ActionIcon, Button, Flex, Grid, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Trash } from '@phosphor-icons/react'

import { PageTitle, Paper } from '@/components'
import { useProductDetails } from '@/lib/product'
import {
	ModalDeleteThumbnail,
	ModalEditThumbnail,
} from '@/page-components/products/[id]/components'

const ProductThumbnail = () => {
	const { data } = useProductDetails()
	const [
		editThumbnailOpened,
		{ open: openEditThumbnail, close: closeEditThumbnail },
	] = useDisclosure(false)
	const [
		deleteThumbnailOpened,
		{ open: openDeleteThumbnail, close: closeDeleteThumbnail },
	] = useDisclosure(false)

	return (
		<>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Thumbnail"
					action={
						<Flex gap={8}>
							<Button
								color="gray"
								variant="outline"
								size="xs"
								onClick={openEditThumbnail}
							>
								Edit
							</Button>
							<ActionIcon
								color="gray"
								variant="outline"
								size="md"
								onClick={openDeleteThumbnail}
							>
								<Trash size={18} />
							</ActionIcon>
						</Flex>
					}
				/>
				<Grid className="mt-4">
					<Grid.Col span={4}>
						<Image src={data?.thumbnail} alt="Thumbnail" />
					</Grid.Col>
				</Grid>
			</Paper>
			<ModalEditThumbnail
				opened={editThumbnailOpened}
				onClose={closeEditThumbnail}
			/>
			<ModalDeleteThumbnail
				opened={deleteThumbnailOpened}
				onClose={closeDeleteThumbnail}
			/>
		</>
	)
}

export default ProductThumbnail
