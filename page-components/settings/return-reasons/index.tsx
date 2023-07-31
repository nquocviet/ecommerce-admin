import { useState } from 'react'
import { Grid } from '@mantine/core'

import { Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { ReasonDetails, Reasons } from '@/page-components/settings/components'
import { ReturnReasonEntity } from '@/types/return-reason'

const ReturnReasons = () => {
	const [reasonSelected, setReasonSelected] =
		useState<ReturnReasonEntity | null>(null)

	return (
		<>
			<Meta
				title={`Return Reason Settings | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.SETTINGS.RETURN_REASONS}`}
			/>
			<Grid>
				<Grid.Col md={6}>
					<Reasons
						reasonSelected={reasonSelected}
						setReasonSelected={setReasonSelected}
					/>
				</Grid.Col>
				<Grid.Col md={6}>
					<ReasonDetails reasonSelected={reasonSelected} />
				</Grid.Col>
			</Grid>
		</>
	)
}

export default ReturnReasons
