import React, { ReactNode } from 'react'
import { Text } from '@mantine/core'

import { Logo } from '@/components'

interface AuthLayoutProps {
	title: string
	children: ReactNode
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-primary-600 to-fuchsia-400">
			<main className="w-full max-w-xl rounded-lg bg-white px-12 pt-8 pb-16 text-center">
				<Logo size={64} className="mb-4" />
				<Text className="mb-4 text-display-sm font-semibold">{title}</Text>
				{children}
			</main>
		</div>
	)
}

export default AuthLayout
