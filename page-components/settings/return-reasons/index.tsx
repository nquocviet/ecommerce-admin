import { useState } from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'
import { ReturnReasonEntity } from '@/types/return-reason'

import { ReasonDetails, Reasons } from './components'

const ReturnReasons = () => {
	const [reasonSelected, setReasonSelected] =
		useState<ReturnReasonEntity | null>(null)

	return (
		<SettingsLayout>
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
		</SettingsLayout>
	)
}

export default ReturnReasons
