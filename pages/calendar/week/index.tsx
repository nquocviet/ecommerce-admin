import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import WeeklyCalendar from '@/page-components/calendar/week'
import { NextPageWithLayout } from '@/pages/_app'

const WeeklyCalendarPage: NextPageWithLayout = () => {
	return <WeeklyCalendar />
}

WeeklyCalendarPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout fluid>{page}</BaseLayout>
}

export default WeeklyCalendarPage
