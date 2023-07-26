import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Calendar from '@/page-components/calendar'
import { NextPageWithLayout } from '@/pages/_app'

const CalendarPage: NextPageWithLayout = () => {
	return <Calendar />
}

CalendarPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default CalendarPage
