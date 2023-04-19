import { useState } from 'react'
import { Grid } from '@mantine/core'

import { SettingsLayout } from '@/layouts'

import { ReasonDetails, Reasons } from './components'

const ReturnReasons = () => {
	const [reasonSelected, setReasonSelected] = useState<Record<
		string,
		any
	> | null>(null)

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
