import React from 'react'
import { Button, Paper } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { PageTitle } from '@/components'

const Details = () => {
	return (
		<Paper shadow="xs" p="xl">
			<PageTitle
				title="Details"
				size="sm"
				action={
					<Button
						variant="outline"
						color="gray"
						size="xs"
						leftIcon={<Plus size={16} />}
					>
						New task rate
					</Button>
				}
			/>
		</Paper>
	)
}

export default Details
