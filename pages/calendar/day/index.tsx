import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import DailyCalendar from '@/page-components/calendar/day'
import { NextPageWithLayout } from '@/pages/_app'

const DailyCalendarPage: NextPageWithLayout = () => {
	return <DailyCalendar />
}

DailyCalendarPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout fluid>{page}</BaseLayout>
}

export default DailyCalendarPage
