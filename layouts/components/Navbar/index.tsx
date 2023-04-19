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

import { Logo } from '@/components'
import { APP_NAME } from '@/constants/common'
import { ASIDE_WIDTH_LG, ASIDE_WIDTH_SM } from '@/constants/layout'

import Menu from '../Menu'

type TNavbarProps = {
	opened: boolean
	toggle: () => void
}

const Navbar = ({ opened, toggle }: TNavbarProps) => {
	return (
		<MantineNavbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: ASIDE_WIDTH_SM, lg: ASIDE_WIDTH_LG }}
		>
			<Flex justify="space-between" align="center" className="mb-10">
				<Flex align="center" gap={10}>
					<Logo />
					<Text className="font-semibold">{APP_NAME}</Text>
				</Flex>
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
