import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Kanban from '@/page-components/kanban'
import { NextPageWithLayout } from '@/pages/_app'

const KanbanPage: NextPageWithLayout = () => {
	return <Kanban />
}

KanbanPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout fluid>{page}</BaseLayout>
}

export default KanbanPage
