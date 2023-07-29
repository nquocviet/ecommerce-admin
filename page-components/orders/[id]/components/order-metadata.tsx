import React from 'react'

import { JSONView, PageTitle, Paper } from '@/components'
import { useOrderDetails } from '@/lib/order'

const OrderMetadata = () => {
	const { data } = useOrderDetails()

	return (
		<Paper>
			<PageTitle order={2} size="sm" title="Raw order" />
			<JSONView data={data} className="mt-4" />
		</Paper>
	)
}

export default OrderMetadata
