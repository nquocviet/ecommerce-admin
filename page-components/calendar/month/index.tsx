import React, { useState } from 'react'
import { ActionIcon, clsx, Flex, Grid, Text } from '@mantine/core'

import {
	CALENDAR_WEEK_ROWS,
	CURRENT_MONTH,
	CURRENT_YEAR,
	DATE_MONTH_YEAR_OPTIONS,
	WEEKDAY_SHORT_NAMES,
} from '@/constants/common'
import { CalendarLayout } from '@/page-components/calendar/components'
import { formatDate, getMonthDates } from '@/utils'

const DEFAULT_MONTH = `${CURRENT_YEAR}-${CURRENT_MONTH}`

const MonthlyCalendar = () => {
	const [currentDate, setCurrentDate] = useState(DEFAULT_MONTH)
	const [currentYear, currentMonth] = currentDate.split('-')
	const monthDates = getMonthDates(Number(currentMonth), Number(currentYear))

	const onChangeMonth = (value: 1 | -1) => {
		setCurrentDate((prevState) => {
			const [year, month] = prevState.split('-')
			const incomingMonth = Number(month) + value

			if (incomingMonth > 12) {
				return `${Number(year) + 1}-${1}`
			}
			if (incomingMonth < 1) {
				return `${Number(year) - 1}-${12}`
			}
			return `${year}-${incomingMonth}`
		})
	}

	return (
		<CalendarLayout
			dateDisplay={formatDate(new Date(currentDate), DATE_MONTH_YEAR_OPTIONS)}
			onTodayClick={() => setCurrentDate(DEFAULT_MONTH)}
			onPreviousChange={() => onChangeMonth(-1)}
			onNextChange={() => onChangeMonth(1)}
		>
			<Flex
				direction="column"
				align="stretch"
				className="h-full overflow-hidden"
			>
				<Grid gutter={0}>
					{[...Array(CALENDAR_WEEK_ROWS)].map((_, day) => (
						<Grid.Col
							key={day}
							span="auto"
							className="-mb-1 border-0 border-r border-solid border-gray-300 pt-1 last:border-r-0"
						>
							<Text className="text-center text-xs font-medium text-gray-500">
								{WEEKDAY_SHORT_NAMES[day]}
							</Text>
						</Grid.Col>
					))}
				</Grid>
				{[...Array(monthDates.length / CALENDAR_WEEK_ROWS)].map((_, row) => (
					<Grid
						key={row}
						className="grow border-0 border-b border-solid border-gray-300 last:border-b-0"
						gutter={0}
					>
						{[...Array(CALENDAR_WEEK_ROWS)].map((_, col) => {
							const [, month, day] = monthDates[col + CALENDAR_WEEK_ROWS * row]

							return (
								<Grid.Col
									key={col}
									span="auto"
									className="border-0 border-r border-solid border-gray-300 p-1 last:border-r-0"
								>
									<Flex justify="center">
										<ActionIcon
											radius="xl"
											className={clsx(
												'text-xs font-semibold',
												Number(month) !== Number(currentMonth)
													? 'text-gray-400'
													: 'text-black'
											)}
										>
											{day}
										</ActionIcon>
									</Flex>
								</Grid.Col>
							)
						})}
					</Grid>
				))}
			</Flex>
		</CalendarLayout>
	)
}

export default MonthlyCalendar
