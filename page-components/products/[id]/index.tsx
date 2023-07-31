import React from 'react'
import { Flex, Grid } from '@mantine/core'

import { Loader, Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { useProductDetails } from '@/lib/product'

import {
	ProductAttributes,
	ProductGeneralInformation,
	ProductMedia,
	ProductMetadata,
	ProductThumbnail,
	ProductVariants,
} from './components'

const ProductDetails = () => {
	const { data, isLoading } = useProductDetails()

	if (isLoading) return <Loader />

	return (
		<>
			<Meta
				title={`${data?.title} | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.PRODUCTS}`}
			/>
			<Grid>
				<Grid.Col md={8}>
					<Flex direction="column" align="stretch" gap={16}>
						<ProductGeneralInformation />
						<ProductVariants />
						<ProductAttributes />
						<ProductMetadata />
					</Flex>
				</Grid.Col>
				<Grid.Col md={4}>
					<Flex direction="column" align="stretch" gap={16}>
						<ProductThumbnail />
						<ProductMedia />
					</Flex>
				</Grid.Col>
			</Grid>
		</>
	)
}

export default ProductDetails
