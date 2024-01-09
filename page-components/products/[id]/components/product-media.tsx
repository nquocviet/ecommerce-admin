import React from 'react'
import { Button, Grid, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { PageTitle, Paper } from '@/components'
import { useProductDetails } from '@/lib/product'
import { ModalEditMedia } from '@/page-components/products/[id]/components'

const ProductMedia = () => {
	const { data } = useProductDetails()
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Media"
					action={
						<Button color="gray" variant="outline" size="xs" onClick={open}>
							Edit media
						</Button>
					}
				/>
				<Grid gutter={20} className="mt-4">
					{data?.images.map(({ id, url }, index) => (
						<Grid.Col span={4} key={id}>
							<Image src={url} alt={`Image ${index + 1}`} />
						</Grid.Col>
					))}
				</Grid>
			</Paper>
			<ModalEditMedia opened={opened} onClose={close} />
		</>
	)
}

export default ProductMedia
