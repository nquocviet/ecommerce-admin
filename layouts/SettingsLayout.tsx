import React, { ReactNode } from 'react'

import ROUTES from '@/routes'

import DetailLayout from './DetailLayout'

type SettingsLayoutProps = {
	children: ReactNode
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
	return (
		<DetailLayout label="Back to settings" href={ROUTES.SETTINGS.DEFAULT}>
			{children}
		</DetailLayout>
	)
}

export default SettingsLayout
