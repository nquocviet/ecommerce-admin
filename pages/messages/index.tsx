import React, { ReactElement } from 'react'

import { BaseLayout } from '@/layouts'
import Messages from '@/page-components/messages'
import { NextPageWithLayout } from '@/pages/_app'

const MessagesPage: NextPageWithLayout = () => {
	return <Messages />
}

MessagesPage.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}

export default MessagesPage
