import { ReactNode } from 'react'
import { clsx } from '@mantine/core'

interface HeadingProps {
	title: string
	rightSection?: ReactNode
	className?: string
}

const Heading = ({ title, className, rightSection }: HeadingProps) => {
	return (
		<div className="flex items-center justify-between gap-2">
			<h2 className={clsx('mt-0 mb-4 text-xl font-semibold', className)}>
				{title}
			</h2>
			{rightSection}
		</div>
	)
}

export default Heading
