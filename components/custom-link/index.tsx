import { ReactNode } from 'react'
import { clsx } from '@mantine/core'
import Link, { LinkProps } from 'next/link'

interface CustomLinkProps extends LinkProps {
	children: ReactNode
	leading?: ReactNode
	trailing?: ReactNode
	className?: string
}

const CustomLink = ({
	href,
	children,
	leading,
	trailing,
	className,
}: CustomLinkProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				'inline-flex items-center gap-3 font-medium text-gray-500 no-underline',
				className
			)}
		>
			{leading && leading}
			{children}
			{trailing && trailing}
		</Link>
	)
}

export default CustomLink
