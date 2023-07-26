import React from 'react'
import { ActionIcon, Button, Flex, Grid, Image, Paper } from '@mantine/core'
import { Trash } from '@phosphor-icons/react'

import { PageTitle } from '@/components'
import { useProductDetails } from '@/lib/product'

const ProductThumbnail = () => {
	const { data } = useProductDetails()

	return (
		<Paper shadow="xs" p="xl">
			<PageTitle
				order={2}
				size="sm"
				title="Thumbnail"
				action={
					<Flex gap={8}>
						<Button color="gray" variant="outline" size="xs">
							Edit
						</Button>
						<ActionIcon color="gray" variant="outline" size="md">
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
	)
}

export default ProductThumbnail
