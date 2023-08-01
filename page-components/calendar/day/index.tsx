import React, { useState } from 'react'
import { Flex } from '@mantine/core'

import { CURRENT_DATE } from '@/constants/common'
import {
	CalendarLayout,
	TimeHeader,
	TimeSidebar,
	TimeTable,
} from '@/page-components/calendar/components'
import { formatDate } from '@/utils'

const DailyCalendar = () => {
	const [currentDate, setCurrentDate] = useState(CURRENT_DATE)

	const onChangeDate = (value: 1 | -1) => {
		setCurrentDate((prevState) => {
			const date = new Date(prevState.valueOf())
			date.setDate(date.getDate() + value)
			return date
		})
	}

	return (
		<CalendarLayout
			dateDisplay={formatDate(currentDate)}
			onTodayClick={() => setCurrentDate(CURRENT_DATE)}
			onPreviousChange={() => onChangeDate(-1)}
			onNextChange={() => onChangeDate(1)}
		>
			<TimeHeader dates={[currentDate]} />
			<Flex>
				<TimeSidebar />
				<TimeTable dates={[currentDate]} />
			</Flex>
		</CalendarLayout>
	)
}

export default DailyCalendar
