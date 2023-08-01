import React from 'react'
import { clsx, Flex } from '@mantine/core'

import { HOURS_PER_DAY } from '@/constants/common'

interface TimeTableProps {
	dates: Date[]
}

const TimeTable = ({ dates }: TimeTableProps) => {
	return (
		<Flex direction="column" align="stretch" className="grow">
			<Flex align="stretch" className="grow">
				{dates.map((_, index) => (
					<Flex key={index} direction="column" align="stretch" className="grow">
						{[...Array(HOURS_PER_DAY)].map((_, index) => (
							<div
								key={index}
								className={clsx(
									'h-12 border-0 border-l border-solid border-gray-300',
									Boolean(index) && 'border-t'
								)}
							></div>
						))}
					</Flex>
				))}
			</Flex>
		</Flex>
	)
}

export default TimeTable
