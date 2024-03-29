import { ReactNode } from 'react'
import { AppShell, Container, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { CONTAINER_WIDTH } from '@/constants/layout'

import { Footer, Header } from './components'

interface ErrorLayoutProps {
	children: ReactNode
}

const ErrorLayout = ({ children }: ErrorLayoutProps) => {
	const theme = useMantineTheme()
	const [opened, { toggle }] = useDisclosure(false)

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					minHeight: 'calc(100vh - var(--footer-height))',
					paddingBottom: '1rem',
				},
				body: {
					overflow: 'hidden',
				},
			}}
			layout="alt"
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			footer={<Footer opened={opened} />}
			header={<Header opened={opened} toggle={toggle} />}
		>
			<Container
				size={CONTAINER_WIDTH}
				py={16}
				className="flex h-full flex-col items-stretch gap-6"
			>
				<div className="flex h-full w-full flex-col items-center justify-center text-center">
					{children}
				</div>
			</Container>
		</AppShell>
	)
}

export default ErrorLayout
