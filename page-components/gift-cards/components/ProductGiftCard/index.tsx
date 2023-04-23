import React from 'react'
import { ActionIcon, Badge, Flex, Loader, Menu, Text } from '@mantine/core'
import { DotsThree, Lock, NotePencil, Trash } from '@phosphor-icons/react'
import { formatMoney } from 'utils'

import { useProductGiftCard } from '@/lib/product'

const ProductGiftCard = () => {
	const { data, isLoading } = useProductGiftCard()

	return isLoading ? (
		<Flex justify="center" align="center" sx={{ minHeight: '100px' }}>
			<Loader size="sm" />
		</Flex>
	) : (
		<Flex direction="column" align="flex-start" gap={12}>
			<Flex justify="space-between" align="center" className="w-full">
				<Text className="text-lg font-bold">{data?.title}</Text>
				<Menu shadow="md" width={200}>
					<Menu.Target>
						<ActionIcon>
							<DotsThree size={20} weight="bold" />
						</ActionIcon>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item icon={<NotePencil size={18} />}>Edit</Menu.Item>
						<Menu.Item icon={<Lock size={18} />}>Unpublish</Menu.Item>
						<Menu.Item
							icon={<Trash size={18} />}
							sx={{
								color: 'var(--red-600)',
							}}
						>
							Delete
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Flex>
			<Text className="text-sm text-gray-500">{data?.description}</Text>
			<Badge
				color="gray"
				sx={{
					height: '28px',
					fontSize: '13px',
					fontWeight: 600,
				}}
			>
				{data
					? formatMoney(
							data?.variants?.[0].prices?.[0]?.amount / 100,
							data?.variants?.[0].prices?.[0]?.currency_code
					  )
					: 0}
			</Badge>
		</Flex>
	)
}

export default ProductGiftCard
