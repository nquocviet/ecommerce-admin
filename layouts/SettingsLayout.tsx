import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { ArrowLeft } from '@phosphor-icons/react'
import ROUTES from 'routes'

import { CustomLink } from '@/components'

import BaseLayout from './BaseLayout'

type TSettingsLayoutProps = {
	children: ReactNode
}

const SettingsLayout = ({ children }: TSettingsLayoutProps) => {
	return (
		<BaseLayout>
			<Box className="-mb-3">
				<CustomLink
					href={ROUTES.SETTINGS.DEFAULT}
					leading={<ArrowLeft size={18} />}
				>
					Back to settings
				</CustomLink>
			</Box>
			{children}
		</BaseLayout>
	)
}

export default SettingsLayout
