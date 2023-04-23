import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { ArrowLeft } from '@phosphor-icons/react'
import { UrlObject } from 'url'

import { CustomLink } from '@/components'

import BaseLayout from './BaseLayout'

type DetailLayoutProps = {
	href: UrlObject | string
	label: string
	children: ReactNode
}

const DetailLayout = ({ href, label, children }: DetailLayoutProps) => {
	return (
		<BaseLayout>
			<Box className="-mb-3">
				<CustomLink
					href={href}
					leading={<ArrowLeft size={18} />}
					className="ml-3 text-sm"
				>
					{label}
				</CustomLink>
			</Box>
			{children}
		</BaseLayout>
	)
}

export default DetailLayout
