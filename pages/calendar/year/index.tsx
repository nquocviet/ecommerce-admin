import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import YearlyCalendar from '@/page-components/calendar/year'
import { NextPageWithLayout } from '@/pages/_app'

const YearlyCalendarPage: NextPageWithLayout = () => {
	return <YearlyCalendar />
}

YearlyCalendarPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout fluid>{page}</BaseLayout>
}

export default YearlyCalendarPage
