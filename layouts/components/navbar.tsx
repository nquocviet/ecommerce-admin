import React from 'react'
import {
	ActionIcon,
	Flex,
	MediaQuery,
	Navbar as MantineNavbar,
	ScrollArea,
	Text,
} from '@mantine/core'
import { X } from '@phosphor-icons/react'
import Link from 'next/link'

import { Logo } from '@/components'
import { APP_NAME } from '@/constants/common'
import { ASIDE_WIDTH_LG, ASIDE_WIDTH_SM } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'
import { Menu } from '@/layouts/components'

interface NavbarProps {
	opened: boolean
	toggle: () => void
}

const Navbar = ({ opened, toggle }: NavbarProps) => {
	return (
		<MantineNavbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: ASIDE_WIDTH_SM, lg: ASIDE_WIDTH_LG }}
		>
			<Flex justify="space-between" align="center" className="mb-10">
				<Link href={ROUTES.HOME} className="text-black no-underline">
					<Flex align="center" gap={10}>
						<Logo />
						<Text className="font-semibold">{APP_NAME}</Text>
					</Flex>
				</Link>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<ActionIcon onClick={toggle}>
						<X size={20} />
					</ActionIcon>
				</MediaQuery>
			</Flex>
			<MantineNavbar.Section grow component={ScrollArea} mx="-md" px="md">
				<Menu />
			</MantineNavbar.Section>
		</MantineNavbar>
	)
}

export default Navbar
