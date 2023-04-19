import React, { ReactNode } from 'react'
import { clsx, Flex } from '@mantine/core'

type ModalActionProps = {
	children: ReactNode
	className?: string
}

const ModalAction = ({ children, className }: ModalActionProps) => {
	return (
		<Flex
			justify="flex-end"
			align="stretch"
			gap={12}
			className={clsx(
				'-mx-6 -mb-2 mt-6 border-0 border-t border-solid border-gray-200 px-6 pt-4',
				className
			)}
		>
			{children}
		</Flex>
	)
}

export default ModalAction
