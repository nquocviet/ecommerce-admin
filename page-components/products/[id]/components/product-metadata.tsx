import React from 'react'

import { JSONView, PageTitle, Paper } from '@/components'
import { useProductDetails } from '@/lib/product'

const ProductMetadata = () => {
	const { data } = useProductDetails()

	return (
		<Paper>
			<PageTitle order={2} size="sm" title="Raw product" />
			<JSONView data={data} className="mt-4" />
		</Paper>
	)
}

export default ProductMetadata
