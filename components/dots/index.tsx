import React, { ReactNode } from 'react'
import { clsx } from '@mantine/core'

type DotsColors = 'primary' | 'gray' | 'blue' | 'red' | 'yellow' | 'green'

interface DotsProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: number
	color?: DotsColors
	children?: ReactNode
	className?: string
}

const dotsColors = {
	primary: 'bg-primary-600',
	gray: 'bg-gray-500',
	blue: 'bg-blue-500',
	red: 'bg-red-600',
	yellow: 'bg-yellow-500',
	green: 'bg-green-500',
}

const Dots = ({
	size = 6,
	color = 'primary',
	children,
	className,
	style,
	...rest
}: DotsProps) => {
	return (
		<span
			className={clsx(
				'inline-block flex-shrink-0 rounded-full',
				dotsColors[color],
				className
			)}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				...style,
			}}
			{...rest}
		>
			{children}
		</span>
	)
}

export default Dots
