import React from 'react'
import { clsx } from '@mantine/core'

type CloseIconProps = {
	open: boolean
}

const CloseIcon = ({ open }: CloseIconProps) => {
	return (
		<div className="relative h-8 w-8 shrink-0">
			<span
				className={clsx(
					'absolute inset-y-[31.75%] left-[48%] right-1/2 w-0.5 rounded bg-gray-500 duration-300'
				)}
				style={{
					...(open && { transform: 'rotate(90deg)' }),
				}}
			/>
			<span
				className={clsx(
					'absolute inset-x-[31.75%] top-[48%] bottom-1/2 h-0.5 rounded bg-gray-500 duration-300',
					open && 'left-1/2 right-1/2'
				)}
				style={{
					...(open && { transform: 'rotate(90deg)' }),
				}}
			/>
		</div>
	)
}

export default CloseIcon
