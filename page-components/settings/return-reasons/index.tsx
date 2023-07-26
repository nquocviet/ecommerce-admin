import { useState } from 'react'
import { Grid } from '@mantine/core'

import { ReasonDetails, Reasons } from '@/page-components/settings/components'
import { ReturnReasonEntity } from '@/types/return-reason'

const ReturnReasons = () => {
	const [reasonSelected, setReasonSelected] =
		useState<ReturnReasonEntity | null>(null)

	return (
		<Grid>
			<Grid.Col span={6}>
				<Reasons
					reasonSelected={reasonSelected}
					setReasonSelected={setReasonSelected}
				/>
			</Grid.Col>
			<Grid.Col span={6}>
				<ReasonDetails reasonSelected={reasonSelected} />
			</Grid.Col>
		</Grid>
	)
}

export default ReturnReasons
