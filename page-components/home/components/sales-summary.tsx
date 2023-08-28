import React, { useState } from 'react'
import { SegmentedControl } from '@mantine/core'
import ReactECharts from 'echarts-for-react'

import { Heading, Paper } from '@/components'
import {
	CURRENT_DATE,
	DATE_MONTH_OPTIONS,
	DATE_MONTH_SHORT_OPTIONS,
	DAYS_OF_CURRENT_MONTH,
} from '@/constants/common'
import {
	formatDate,
	getCurrentMonthDates,
	getFirstDayOfMonths,
	getRandomChartData,
	getWeekDates,
} from '@/utils'

const VIEWS = {
	DAY: 'day',
	MONTH: 'month',
	YEAR: 'year',
}
const colors = ['#7f56d9', '#ee6666']
const datesInWeek = getWeekDates(CURRENT_DATE)
const datesInMonth = getCurrentMonthDates()
const datesInYear = getFirstDayOfMonths()
const data = {
	[VIEWS.DAY]: getRandomChartData(7),
	[VIEWS.MONTH]: getRandomChartData(DAYS_OF_CURRENT_MONTH),
	[VIEWS.YEAR]: getRandomChartData(12, 30),
}
const axis = {
	[VIEWS.DAY]: datesInWeek.map((date) =>
		formatDate(date, DATE_MONTH_SHORT_OPTIONS)
	),
	[VIEWS.MONTH]: datesInMonth.map((date) =>
		formatDate(date, DATE_MONTH_SHORT_OPTIONS)
	),
	[VIEWS.YEAR]: datesInYear.map((date) => formatDate(date, DATE_MONTH_OPTIONS)),
}

const SalesSummary = () => {
	const [currentView, setCurrentView] = useState(VIEWS.DAY)
	const [eCommerce, inStore] = data[currentView]
	const option = {
		animation: false,
		color: colors,
		width: '98%',
		tooltip: {
			trigger: 'axis',
		},
		grid: {
			left: '0%',
			right: '0%',
			top: '8%',
			bottom: '0%',
			containLabel: true,
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				margin: 30,
			},
			data: axis[currentView],
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				margin: 30,
				formatter: (value) => (value > 1000 ? `${value / 1000}K` : value),
			},
		},
		series: [
			{
				name: 'E-commerce',
				type: 'line',
				smooth: true,
				data: eCommerce,
			},
			{
				name: 'In store',
				type: 'line',
				smooth: true,
				data: inStore,
			},
		],
	}

	return (
		<Paper>
			<Heading
				title="Sales"
				rightSection={
					<SegmentedControl
						data={[
							{ label: 'Day', value: VIEWS.DAY },
							{ label: 'Month', value: VIEWS.MONTH },
							{ label: 'Year', value: VIEWS.YEAR },
						]}
						onChange={(view) => setCurrentView(view)}
					/>
				}
			/>
			<ReactECharts option={option} />
		</Paper>
	)
}

export default SalesSummary
