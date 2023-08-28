import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { ArrowLeft } from '@phosphor-icons/react'
import { UrlObject } from 'url'

import { CustomLink } from '@/components'

import BaseLayout from './base-layout'

interface DetailsLayoutProps {
	href: UrlObject | string
	label: string
	children: ReactNode
}

const DetailsLayout = ({ href, label, children }: DetailsLayoutProps) => {
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

export default DetailsLayout
