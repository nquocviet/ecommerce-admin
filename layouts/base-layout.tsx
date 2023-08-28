import { ReactNode } from 'react'
import { AppShell, Container, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { CONTAINER_WIDTH } from '@/constants/layout'

import { Footer, Header, Navbar } from './components'

interface BaseLayoutProps {
	children: ReactNode
	fluid?: boolean
}

const BaseLayout = ({ children, fluid }: BaseLayoutProps) => {
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
					marginBottom: 'var(--footer-height)',
				},
				body: {
					overflow: 'hidden',
				},
			}}
			layout="alt"
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<Navbar opened={opened} toggle={toggle} />}
			footer={<Footer opened={opened} />}
			header={<Header opened={opened} toggle={toggle} />}
		>
			<Container
				size={CONTAINER_WIDTH}
				py={16}
				className="flex h-full flex-col items-stretch gap-6"
				fluid={fluid}
			>
				{children}
			</Container>
		</AppShell>
	)
}

export default BaseLayout
