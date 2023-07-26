import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import AppProvider from '@/providers'

import '@/styles/global.css'
import '@/styles/tailwind.css'
import 'nprogress/nprogress.css'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page)
	const [showChild, setShowChild] = useState<boolean>(false)
	const { events, isReady } = useRouter()

	useEffect(() => {
		setShowChild(true)
	}, [])

	useEffect(() => {
		const handleRouteStart = () => NProgress.start()
		const handleRouteDone = () => NProgress.done()

		events.on('routeChangeStart', handleRouteStart)
		events.on('routeChangeComplete', handleRouteDone)
		events.on('routeChangeError', handleRouteDone)

		return () => {
			events.off('routeChangeStart', handleRouteStart)
			events.off('routeChangeComplete', handleRouteDone)
			events.off('routeChangeError', handleRouteDone)
		}
	}, [events])

	if (!showChild || !isReady || typeof window === 'undefined') return null

	return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
}

export default MyApp
