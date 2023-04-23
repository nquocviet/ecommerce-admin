import React from 'react'
import { clsx } from '@mantine/core'

type ChipVariants = 'outline' | 'contained'

type ChipProps = {
	label: string
	variant?: ChipVariants
	className?: string
}

const Chip = ({ label, variant = 'outline', className }: ChipProps) => {
	return (
		<div
			className={clsx(
				'rounded-md px-3 py-1.5 text-xs font-medium',
				variant === 'outline' && 'border border-solid border-gray-300',
				variant === 'contained' && 'bg-gray-100',
				className
			)}
		>
			{label}
		</div>
	)
}

export default Chip
