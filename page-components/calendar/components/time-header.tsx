import React from 'react'
import { ActionIcon, clsx, Flex, Text } from '@mantine/core'

import { CURRENT_DATE, WEEKDAY_SHORT_NAMES } from '@/constants/common'
import { isSameDate } from '@/utils'

interface TimeHeaderProps {
	dates: Date[]
	centered?: boolean
}

const TimeHeader = ({ dates, centered }: TimeHeaderProps) => {
	return (
		<div className="sticky top-0 z-elevate bg-white pl-14">
			<div className="relative">
				<span className="absolute right-full bottom-0 w-2 border-0 border-b border-solid border-gray-300" />
				<Flex
					align="stretch"
					className="border-0 border-b border-solid border-gray-300"
				>
					{dates.map((date, index) => {
						const highlight = isSameDate(date, CURRENT_DATE)

						return (
							<Flex
								key={index}
								direction="column"
								align={centered ? 'center' : 'flex-start'}
								className="relative grow py-2 px-3"
							>
								<Flex direction="column" align="center">
									<Text
										className={clsx(
											'text-xs font-medium',
											highlight ? 'text-primary-600' : 'text-gray-500'
										)}
									>
										{WEEKDAY_SHORT_NAMES[date.getDay()]}
									</Text>
									<ActionIcon
										size="xl"
										radius="xl"
										color={highlight ? 'primary' : 'gray'}
										variant={highlight ? 'filled' : 'light'}
										className={clsx(
											'text-display-xs font-medium',
											highlight ? 'text-white' : 'text-gray-500'
										)}
									>
										{date.getDate()}
									</ActionIcon>
								</Flex>
								<span className="absolute bottom-0 left-0 h-5 border-0 border-l border-solid border-gray-300" />
							</Flex>
						)
					})}
				</Flex>
			</div>
		</div>
	)
}

export default TimeHeader
