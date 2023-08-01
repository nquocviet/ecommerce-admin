import React from 'react'
import { Flex } from '@mantine/core'

import { HOURS_PER_DAY } from '@/constants/common'
import { hourWithPeriod } from '@/utils'

const TimeSidebar = () => {
	return (
		<Flex direction="column" align="stretch" className="w-14">
			{[...Array(HOURS_PER_DAY)].map((_, index) => (
				<div key={index} className="relative h-12 pl-3 pr-3.5">
					{Boolean(index) && (
						<>
							<span className="relative -top-3.5 text-2xs font-medium text-gray-500">
								{hourWithPeriod(index)}
							</span>
							<span className="absolute right-0 w-2 border-0 border-b border-solid border-gray-300" />
						</>
					)}
				</div>
			))}
		</Flex>
	)
}

export default TimeSidebar
