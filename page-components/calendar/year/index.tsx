import React, { useState } from 'react'
import { Grid, Group } from '@mantine/core'
import { DatePicker } from '@mantine/dates'

import { CURRENT_DATE, CURRENT_YEAR, TOTAL_MONTHS } from '@/constants/common'
import { CalendarLayout } from '@/page-components/calendar/components'
import { isSameDate } from '@/utils'

const YearlyCalendar = () => {
	const [currentYear, setCurrentYear] = useState(CURRENT_YEAR)

	const onChangeYear = (value: 1 | -1) => {
		setCurrentYear((prevState) => prevState + value)
	}

	return (
		<CalendarLayout
			dateDisplay={String(currentYear)}
			onTodayClick={() => setCurrentYear(CURRENT_YEAR)}
			onPreviousChange={() => onChangeYear(-1)}
			onNextChange={() => onChangeYear(1)}
		>
			<Grid className="my-4">
				{[...Array(TOTAL_MONTHS)].map((_, index) => (
					<Grid.Col key={index} sm={6} md={4} xl={3}>
						<Group position="center">
							<DatePicker
								maxLevel="month"
								date={new Date(Number(currentYear), index)}
								weekendDays={[]}
								monthLabelFormat="MMMM"
								size="xs"
								styles={{
									calendarHeaderControl: {
										display: 'none !important',
									},
								}}
								getDayProps={(date) => {
									if (
										date.getMonth() === index &&
										isSameDate(date, CURRENT_DATE)
									) {
										return {
											sx: (theme) => ({
												backgroundColor:
													theme.colors.primary[theme.fn.primaryShade()],
												color: theme.white,
												...theme.fn.hover({
													backgroundColor: theme.colors.primary[7],
												}),
											}),
										}
									}

									return {}
								}}
							/>
						</Group>
					</Grid.Col>
				))}
			</Grid>
		</CalendarLayout>
	)
}

export default YearlyCalendar
