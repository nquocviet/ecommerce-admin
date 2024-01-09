import React from 'react'
import {
	ActionIcon,
	Avatar,
	Burger,
	Flex,
	Header as MantineHeader,
	MediaQuery,
	Menu,
	Text,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import {
	BellSimple,
	GearSix,
	Question,
	SignOut,
	User,
} from '@phosphor-icons/react'
import Link from 'next/link'

import { CONTAINER_WIDTH_XS, HEADER_HEIGHT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'
import { AppSearch } from '@/layouts/components'

import HelperDialog from './helper-dialog'

interface HeaderProps {
	opened: boolean
	toggle: () => void
}

const Header = ({ opened, toggle }: HeaderProps) => {
	const { width } = useViewportSize()
	const windowWidth =
		(typeof window !== 'undefined' && window.screen.width) || 0

	return (
		<MantineHeader
			height={HEADER_HEIGHT}
			px="xl"
			py="md"
			mr="var(--removed-body-scroll-bar-size)"
		>
			<Flex align="center" className="h-full">
				<Flex justify="space-between" align="center" className="w-full">
					<Flex align="center" gap={12}>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger opened={opened} onClick={toggle} size="sm" mr="xl" />
						</MediaQuery>
						{(width || windowWidth) >= CONTAINER_WIDTH_XS && <AppSearch />}
					</Flex>
					<Flex align="center" gap={12}>
						<MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
							<Menu shadow="md" width={400}>
								<Menu.Target>
									<ActionIcon
										variant="subtle"
										color="gray"
										size="lg"
										aria-label="Help"
									>
										<Question size={24} />
									</ActionIcon>
								</Menu.Target>
								<Menu.Dropdown sx={{ maxHeight: '90vh', overflow: 'auto' }}>
									<HelperDialog />
								</Menu.Dropdown>
							</Menu>
						</MediaQuery>
						<ActionIcon
							variant="subtle"
							color="gray"
							size="lg"
							aria-label="Notification"
						>
							<BellSimple size={24} />
						</ActionIcon>
						<Menu shadow="md" width={240}>
							<Menu.Target>
								<ActionIcon variant="transparent" color="gray" size="lg">
									<Avatar color="primary" radius="xl" size={32}>
										US
									</Avatar>
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<div className="truncate px-3 py-2">
									<Text className="text-sm font-semibold">Username</Text>
									<Text className="text-xs text-gray-500">
										example@gmail.com
									</Text>
								</div>
								<Menu.Divider />
								<Menu.Item
									component={Link}
									href={ROUTES.SETTINGS.PERSONAL_INFORMATION}
									icon={<User size={20} />}
								>
									Profile
								</Menu.Item>
								<Menu.Item
									component={Link}
									href={ROUTES.SETTINGS.DEFAULT}
									icon={<GearSix size={20} />}
								>
									Settings
								</Menu.Item>
								<Menu.Divider />
								<Menu.Item
									component={Link}
									href={ROUTES.LOGIN}
									icon={<SignOut size={20} />}
									sx={{
										color: 'var(--red-600)',
									}}
								>
									Sign out
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</Flex>
				</Flex>
			</Flex>
		</MantineHeader>
	)
}

export default Header
