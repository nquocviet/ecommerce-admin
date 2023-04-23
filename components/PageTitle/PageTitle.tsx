import { ReactNode } from 'react'
import { Box, clsx, Flex, Text, Title, TitleOrder } from '@mantine/core'

type TPageTitleProps = {
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
}: TPageTitleProps) => {
	const largerSize = size === 'md'
	const fontSize = largerSize ? 30 : 24
	const spacing = largerSize ? 12 : 4

	return (
		<Box className={clsx('mb-2', className)}>
			<Flex justify="space-between" gap={8} className="mb-2">
				<Box>
					<Title order={order} size={fontSize} className="font-semibold">
						{title}
					</Title>
				</Box>
				{action && action}
			</Flex>
			{description && (
				<Text className="text-sm text-gray-500" sx={{ marginTop: spacing }}>
					{description}
				</Text>
			)}
		</Box>
	)
}

export default PageTitle
