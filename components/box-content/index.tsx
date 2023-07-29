import React, { ReactNode } from 'react'
import { clsx, Divider, Flex, Text } from '@mantine/core'

interface BoxContentProps {
	title: ReactNode
	description: ReactNode
	lastItem?: boolean
	titleClassName?: string
	className?: string
}

const BoxContent = ({
	title,
	description,
	lastItem,
	titleClassName,
	className,
}: BoxContentProps) => {
	return (
		<Flex align="stretch" className={clsx('text-sm', className)}>
			<div>
				<Text className={clsx('mb-2 text-gray-500', titleClassName)}>
					{title}
				</Text>
				<Text className="text-gray-800">{description}</Text>
			</div>
			{!lastItem && (
				<Divider
					orientation="vertical"
					color="var(--gray-200)"
					className="mx-6 hidden sm:block"
				/>
			)}
		</Flex>
	)
}

export default BoxContent
