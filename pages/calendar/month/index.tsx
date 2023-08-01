import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import MonthlyCalendar from '@/page-components/calendar/month'
import { NextPageWithLayout } from '@/pages/_app'

const MonthlyCalendarPage: NextPageWithLayout = () => {
	return <MonthlyCalendar />
}

MonthlyCalendarPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout fluid>{page}</BaseLayout>
}

export default MonthlyCalendarPage
