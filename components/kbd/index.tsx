import React, { ReactNode } from 'react'
import { clsx } from '@mantine/core'

interface KbdProps {
	children: ReactNode
	onlyIcon?: boolean
}

const Kbd = ({ children, onlyIcon }: KbdProps) => {
	return (
		<span
			className={clsx(
				'inline-flex flex-shrink-0 items-center justify-center rounded bg-gray-100',
				onlyIcon ? 'p-1.5' : 'px-1.5 py-1 font-medium leading-5'
			)}
		>
			{children}
		</span>
	)
}

export default Kbd
