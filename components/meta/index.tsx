import Head from 'next/head'

import { APP_DESCRIPTION } from '@/constants/common'

interface MetaProps {
	canonical: string
	desc?: string
	image?: string
	title: string
}

const Meta = ({
	canonical,
	desc = APP_DESCRIPTION,
	image,
	title,
}: MetaProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta name="og:title" property="og:title" content={title} />
			<meta name="description" content={desc} />
			<meta name="og:description" property="og:description" content={desc} />
			<meta name="twitter:description" content={desc} />
			{image && (
				<>
					<meta property="og:image" content={image} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={image} />
				</>
			)}
			<meta property="og:url" content={canonical} />
			<meta name="twitter:title" content={title} />
			<link rel="canonical" href={canonical} />
			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
	)
}

export default Meta
