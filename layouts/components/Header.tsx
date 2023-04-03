import React from 'react'
import {
	ActionIcon,
	Avatar,
	Burger,
	Button,
	Flex,
	Header as MantineHeader,
	MediaQuery,
	Text,
} from '@mantine/core'
import { BellSimple, MagnifyingGlass, Question } from '@phosphor-icons/react'

import { HEADER_HEIGHT } from '@/constants/layout'

type THeaderProps = {
	opened: boolean
	toggle: () => void
}

const Header = ({ opened, toggle }: THeaderProps) => {
	return (
		<MantineHeader height={HEADER_HEIGHT} px="xl" py="md">
			<Flex align="center" className="h-full">
				<Flex justify="space-between" align="center" className="w-full">
					<Flex align="center" gap={12}>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger opened={opened} onClick={toggle} size="sm" mr="xl" />
						</MediaQuery>
						<Button
							color="gray"
							variant="light"
							leftIcon={<MagnifyingGlass size={20} />}
							className="text-gray-400"
						>
							<Text className="px-2 font-semibold">Ctrl K</Text>
							<Text className="font-regular">Search anything...</Text>
						</Button>
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
