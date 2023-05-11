import React, { ReactNode } from 'react'

import { ROUTES } from '@/routes'

import DetailsLayout from './DetailsLayout'

type SettingsLayoutProps = {
	children: ReactNode
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
	return (
		<DetailsLayout label="Back to settings" href={ROUTES.SETTINGS.DEFAULT}>
			{children}
		</DetailsLayout>
	)
}

export default SettingsLayout
