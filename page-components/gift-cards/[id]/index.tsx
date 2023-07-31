import React from 'react'
import { ActionIcon, Badge, Button, Flex, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	CurrencyDollar,
	DotsThree,
	EyeSlash,
	NotePencil,
} from '@phosphor-icons/react'

import {
	BoxContent,
	Dots,
	JSONView,
	Loader,
	Meta,
	PageTitle,
	Paper,
} from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { useGiftCardDetails } from '@/lib/gift-card'
import {
	ModalEditGiftCardDetails,
	ModalUpdateBalance,
} from '@/page-components/gift-cards/components'
import { formatDate, formatMoney } from '@/utils'

const GiftCardDetails = () => {
	const [
		editGiftCardOpened,
		{ open: openEditGiftCard, close: closeEditGiftCard },
	] = useDisclosure(false)
	const [
		editBalanceOpened,
		{ open: openEditBalance, close: closeEditBalance },
	] = useDisclosure(false)
	const { data, isLoading } = useGiftCardDetails()

	if (isLoading || !data) return <Loader />

	return (
		<>
			<Meta
				title={`${data.code} | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.GIFT_CARDS}`}
			/>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title={data.code || ''}
					description={`Gift Card id: ${data.id}`}
					action={
						<Flex gap={16}>
							<Menu shadow="md" width={200}>
								<Menu.Target>
									<Button color="gray" variant="white" size="sm">
										<Dots size={6} color="green" className="mr-2" />
										Enabled
									</Button>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item>
										<Dots size={6} color="gray" className="mr-2 mb-0.5" />
										Disabled
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
							<Menu shadow="md" width={200}>
								<Menu.Target>
									<ActionIcon>
										<DotsThree size={20} weight="bold" />
									</ActionIcon>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item
										icon={<NotePencil size={20} />}
										onClick={openEditGiftCard}
									>
										Edit
									</Menu.Item>
									<Menu.Item icon={<EyeSlash size={20} />}>Disable</Menu.Item>
									<Menu.Item
										icon={<CurrencyDollar size={20} />}
										onClick={openEditBalance}
									>
										Update balance
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Flex>
					}
				/>
				<Flex justify="space-between" align="flex-end" className="pt-12 pb-8">
					<Flex className="flex-col gap-4 sm:flex-row sm:gap-0">
						<BoxContent
							title="Original amount"
							description={formatMoney(data.value)}
						/>
						<BoxContent
							title="Balance"
							description={formatMoney(data.balance)}
						/>
						<BoxContent
							title="Created"
							description={formatDate(data.created_at)}
							lastItem
						/>
					</Flex>
					<Badge color="gray" size="lg">
						{data.region.name}
					</Badge>
				</Flex>
			</Paper>
			<Paper>
				<PageTitle order={2} size="sm" title="Raw gift card" />
				<JSONView data={data} className="mt-4" />
			</Paper>
			<ModalEditGiftCardDetails
				opened={editGiftCardOpened}
				onClose={closeEditGiftCard}
			/>
			<ModalUpdateBalance
				opened={editBalanceOpened}
				onClose={closeEditBalance}
			/>
		</>
	)
}

export default GiftCardDetails
