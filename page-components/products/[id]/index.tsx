import React from 'react'
import { Flex, Grid } from '@mantine/core'

import { Loader } from '@/components'
import { PRODUCT_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import { useProductDetails } from '@/lib/product'
import ROUTES from '@/routes'

import {
	ProductAttributes,
	ProductGeneralInformation,
	ProductMedia,
	ProductMetadata,
	ProductThumbnail,
	ProductVariants,
} from './components'

const ProductDetails = () => {
	const { isLoading } = useProductDetails()

	if (isLoading) return <Loader />

	return (
		<DetailsLayout
			href={{
				pathname: ROUTES.PRODUCTS,
				query: {
					tab: PRODUCT_TABS.PRODUCTS,
				},
			}}
			label="Back to products"
		>
			<Grid>
				<Grid.Col span={8}>
					<Flex direction="column" align="stretch" gap={16}>
						<ProductGeneralInformation />
						<ProductVariants />
						<ProductAttributes />
						<ProductMetadata />
					</Flex>
				</Grid.Col>
				<Grid.Col span={4}>
					<Flex direction="column" align="stretch" gap={16}>
						<ProductThumbnail />
						<ProductMedia />
					</Flex>
				</Grid.Col>
			</Grid>
		</DetailsLayout>
	)
}

export default ProductDetails
