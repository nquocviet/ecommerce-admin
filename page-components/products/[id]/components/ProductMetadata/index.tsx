import React from 'react'
import { Paper } from '@mantine/core'

import { JSONView, PageTitle } from '@/components'
import { useProductDetails } from '@/lib/product'

const ProductMetadata = () => {
	const { data } = useProductDetails()

	return (
		<Paper shadow="xs" p="xl">
			<PageTitle order={2} size="sm" title="Raw Product" />
			<JSONView data={data} className="mt-4" />
		</Paper>
	)
}

export default ProductMetadata
