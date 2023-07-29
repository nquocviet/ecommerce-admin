import React from 'react'
import { Button, Flex } from '@mantine/core'

import { PageTitle, Paper } from '@/components'

const StoreCurrencies = () => {
	return (
		<Flex direction="column" align="stretch" gap={16} className="h-full">
			<Paper>
				<PageTitle
					title="Currencies"
					description="Manage the markets that you will operate within."
					size="sm"
				/>
			</Paper>
			<Paper>
				<PageTitle
					title="Store currencies"
					description="All the currencies available in your store."
					size="sm"
					action={
						<Button color="gray" variant="outline" size="xs">
							Edit currencies
						</Button>
					}
				/>
			</Paper>
		</Flex>
	)
}

export default StoreCurrencies
