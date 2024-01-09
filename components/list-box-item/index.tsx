import React, { ReactNode } from 'react'
import { clsx, Flex } from '@mantine/core'

interface ListBoxItemProps {
	order: number
	title: string
	description: string | number
	action?: ReactNode
	className?: string
}

const ListBoxItem = ({
	order,
	title,
	description,
	action,
	className,
}: ListBoxItemProps) => {
	return (
		<Flex
			justify="space-between"
			align="center"
			gap={16}
			className={clsx(
				'rounded-lg border border-solid border-gray-200 p-4',
				className
			)}
		>
			<Flex gap={16} className="flex-1 overflow-hidden">
				<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold text-gray-500">
					§{order}
				</div>
				<div className="text-sm">
					<p className="m-0 font-medium text-black">{title}</p>
					<p className="m-0 truncate text-gray-500">{description}</p>
				</div>
			</Flex>
			{action}
		</Flex>
	)
}

export default ListBoxItem
