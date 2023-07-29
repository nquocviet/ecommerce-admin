import React from 'react'
import {
	ActionIcon,
	Avatar,
	Burger,
	Flex,
	Header as MantineHeader,
	MediaQuery,
} from '@mantine/core'
import { BellSimple, Question } from '@phosphor-icons/react'

import { HEADER_HEIGHT } from '@/constants/layout'
import { AppSearch } from '@/layouts/components'

interface HeaderProps {
	opened: boolean
	toggle: () => void
}

const Header = ({ opened, toggle }: HeaderProps) => {
	return (
		<MantineHeader height={HEADER_HEIGHT} px="xl" py="md">
			<Flex align="center" className="h-full">
				<Flex justify="space-between" align="center" className="w-full">
					<Flex align="center" gap={12}>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger opened={opened} onClick={toggle} size="sm" mr="xl" />
						</MediaQuery>
						<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
							<AppSearch />
						</MediaQuery>
					</Flex>
					<Flex align="center" gap={12}>
						<ActionIcon variant="subtle" color="gray" size="lg">
							<Question size={24} />
						</ActionIcon>
						<ActionIcon variant="subtle" color="gray" size="lg">
							<BellSimple size={24} />
						</ActionIcon>
						<ActionIcon variant="transparent" color="gray" size="lg">
							<Avatar color="primary" radius="xl" size={32}>
								US
							</Avatar>
						</ActionIcon>
					</Flex>
				</Flex>
			</Flex>
		</MantineHeader>
	)
}

export default Header
