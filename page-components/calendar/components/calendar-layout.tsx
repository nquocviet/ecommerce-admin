import React, { ReactNode } from 'react'
import { ActionIcon, Button, Flex, Menu, Text } from '@mantine/core'
import {
	CalendarBlank,
	CaretDown,
	CaretLeft,
	CaretRight,
	Plus,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Meta, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME, CALENDAR_VIEW_OPTIONS } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

interface CalendarLayoutProps {
	dateDisplay: string
	children: ReactNode
	onTodayClick: () => void
	onPreviousChange: () => void
	onNextChange: () => void
}

const CalendarLayout = ({
	dateDisplay,
	children,
	onTodayClick,
	onPreviousChange,
	onNextChange,
}: CalendarLayoutProps) => {
	const { pathname } = useRouter()
	const calendarType = pathname.split('/').pop()

	return (
		<>
			<Meta
				title={`Calendar | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.CALENDAR.DEFAULT}`}
			/>
			<Paper p="sm" className="flex grow flex-col items-stretch">
				<Flex justify="space-between" align="center" className="pb-4">
					<Flex align="center" gap={24}>
						<Button
							color="gray"
							variant="outline"
							leftIcon={<CalendarBlank size={20} />}
							onClick={onTodayClick}
						>
							Today
						</Button>
						<Flex>
							<ActionIcon size="lg" radius="xl" onClick={onPreviousChange}>
								<CaretLeft size={20} />
							</ActionIcon>
							<ActionIcon size="lg" radius="xl" onClick={onNextChange}>
								<CaretRight size={20} />
							</ActionIcon>
						</Flex>
						<Text className="text-xl font-medium">{dateDisplay}</Text>
					</Flex>
					<Flex gap={16}>
						<Flex align="center" gap={8}>
							<Text className="text-sm font-medium">View by:</Text>
							<Menu shadow="md" width={200}>
								<Menu.Target>
									<Button
										color="gray"
										variant="outline"
										className="capitalize"
										rightIcon={<CaretDown size={16} />}
									>
										{calendarType}
									</Button>
								</Menu.Target>
								<Menu.Dropdown>
									{CALENDAR_VIEW_OPTIONS.map(({ value, label }) => (
										<Menu.Item key={value} component={Link} href={value}>
											{label}
										</Menu.Item>
									))}
								</Menu.Dropdown>
							</Menu>
						</Flex>
						<Button
							color="primary"
							variant="filled"
							leftIcon={<Plus size={20} weight="bold" />}
						>
							New event
						</Button>
					</Flex>
				</Flex>
				<div className="relative -mx-3 -mb-3 grow overflow-auto border-0 border-t border-solid border-gray-300">
					<div className="absolute inset-0 overflow-x-hidden">{children}</div>
				</div>
			</Paper>
		</>
	)
}

export default CalendarLayout
