import React from 'react'
import { ActionIcon, Badge, Flex, Loader, Menu, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, Lock, NotePencil, Trash } from '@phosphor-icons/react'
import Link from 'next/link'
import { formatMoney } from 'utils'

import { ROUTES } from '@/constants/routes'
import { useProductGiftCard } from '@/lib/product'

import ModalDeleteProductGiftCard from './modal-delete-product-gift-card'

const ProductGiftCard = () => {
	const { data, isLoading } = useProductGiftCard()
	const [
		deleteProductGiftCardOpened,
		{ open: openDeleteProductGiftCard, close: closeDeleteProductGiftCard },
	] = useDisclosure(false)

	return isLoading ? (
		<Flex justify="center" align="center" sx={{ minHeight: '100px' }}>
			<Loader size="sm" />
		</Flex>
	) : (
		<>
			<Flex direction="column" align="flex-start" gap={12}>
				<Flex justify="space-between" align="center" className="w-full">
					<Text className="text-lg font-bold">{data?.title}</Text>
					<Menu shadow="md" width={200}>
						<Menu.Target>
							<ActionIcon aria-label="More options">
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								icon={<NotePencil size={20} />}
								component={Link}
								href={ROUTES.GIFT_CARD_MANAGE}
							>
								Edit
							</Menu.Item>
							<Menu.Item icon={<Lock size={20} />}>Unpublish</Menu.Item>
							<Menu.Item
								icon={<Trash size={20} />}
								sx={{
									color: 'var(--red-600)',
								}}
								onClick={openDeleteProductGiftCard}
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
								data?.variants?.[0].prices?.[0]?.amount,
								data?.variants?.[0].prices?.[0]?.currency_code
						  )
						: 0}
				</Badge>
			</Flex>
			<ModalDeleteProductGiftCard
				opened={deleteProductGiftCardOpened}
				onClose={closeDeleteProductGiftCard}
			/>
		</>
	)
}

export default ProductGiftCard
