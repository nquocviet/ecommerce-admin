import { ReactNode } from 'react'
import { Box, clsx, Flex, Text, Title, TitleOrder } from '@mantine/core'

interface PageTitleProps {
	order?: TitleOrder
	title: string
	description?: string
	action?: ReactNode
	size?: 'sm' | 'md'
	className?: string
}

const PageTitle = ({
	order = 1,
	title,
	description,
	action,
	size = 'md',
	className,
}: PageTitleProps) => {
	const largerSize = size === 'md'
	const fontSize = largerSize ? 30 : 24
	const spacing = largerSize ? 12 : 4

	return (
		<Box className={clsx(className)}>
			<Flex justify="space-between" gap={8} className="h-9">
				<Box>
					<Title order={order} size={fontSize} className="font-semibold">
						{title}
					</Title>
				</Box>
				{action && action}
			</Flex>
			{description && (
				<Text
					className="mt-2 text-sm text-gray-500"
					sx={{ marginTop: spacing }}
				>
					{description}
				</Text>
			)}
		</Box>
	)
}

export default PageTitle
