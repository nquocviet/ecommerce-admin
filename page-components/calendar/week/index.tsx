import React, { useState } from 'react'
import { Flex } from '@mantine/core'

import {
	CURRENT_DATE,
	DATE_MONTH_OPTIONS,
	DATE_MONTH_YEAR_OPTIONS,
	DAYS_IN_WEEK,
} from '@/constants/common'
import {
	CalendarLayout,
	TimeHeader,
	TimeSidebar,
	TimeTable,
} from '@/page-components/calendar/components'
import { formatDate, getWeekDates, isSameMonth } from '@/utils'

const WeeklyCalendar = () => {
	const [currentDate, setCurrentDate] = useState(CURRENT_DATE)
	const datesInWeek = getWeekDates(currentDate)
	const firstDate = datesInWeek.at(0) as Date
	const lastDate = datesInWeek.at(-1) as Date
	const dateDisplay = isSameMonth(firstDate, lastDate)
		? formatDate(firstDate, DATE_MONTH_YEAR_OPTIONS)
		: `${formatDate(firstDate, DATE_MONTH_OPTIONS)} - ${formatDate(
				lastDate,
				DATE_MONTH_YEAR_OPTIONS
		  )}`

	const onChangeWeek = (value: 1 | -1) => {
		setCurrentDate((prevState) => {
			const date = new Date(prevState.valueOf())
			date.setDate(date.getDate() + DAYS_IN_WEEK * value)
			return date
		})
	}

	return (
		<CalendarLayout
			dateDisplay={dateDisplay}
			onTodayClick={() => setCurrentDate(CURRENT_DATE)}
			onPreviousChange={() => onChangeWeek(-1)}
			onNextChange={() => onChangeWeek(1)}
		>
			<TimeHeader dates={datesInWeek} centered />
			<Flex>
				<TimeSidebar />
				<TimeTable dates={datesInWeek} />
			</Flex>
		</CalendarLayout>
	)
}

export default WeeklyCalendar
