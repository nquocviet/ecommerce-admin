import React from 'react'
import { ActionIcon, Button, Flex, Grid, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Plus, Trash } from '@phosphor-icons/react'

import {
	BoxContent,
	Dots,
	JSONView,
	ListBoxItem,
	Loader,
	Meta,
	PageTitle,
	Paper,
} from '@/components'
import {
	APP_DOMAIN,
	APP_NAME,
	FULL_DATE_TIME_OPTIONS,
} from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { useDiscountDetails } from '@/lib/discount'
import {
	ModalAddCondition,
	ModalDeleteDiscount,
	ModalEditConfigurations,
	ModalEditDiscount,
} from '@/page-components/discounts/components'
import { formatDate } from '@/utils'

const DiscountDetails = () => {
	const { data, isLoading } = useDiscountDetails()
	const [
		editDiscountOpened,
		{ open: openEditDiscount, close: closeEditDiscount },
	] = useDisclosure(false)
	const [
		deleteDiscountOpened,
		{ open: openDeleteDiscount, close: closeDeleteDiscount },
	] = useDisclosure(false)
	const [
		editConfigurationsOpened,
		{ open: openEditConfigurations, close: closeEditConfigurations },
	] = useDisclosure(false)
	const [
		addConditionOpened,
		{ open: openAddCondition, close: closeAddCondition },
	] = useDisclosure(false)

	if (isLoading || !data) return <Loader />

	return (
		<>
			<Meta
				title={`${data.code} | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.DISCOUNTS}`}
			/>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title={data.code}
					description={data.rule.description}
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
									<ActionIcon aria-label="More options">
										<DotsThree size={20} weight="bold" />
									</ActionIcon>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item
										icon={<NotePencil size={20} />}
										onClick={openEditDiscount}
									>
										Edit
									</Menu.Item>
									<Menu.Item
										icon={<Trash size={20} />}
										sx={{
											color: 'var(--red-600)',
										}}
										onClick={openDeleteDiscount}
									>
										Delete
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Flex>
					}
				/>
				<Flex className="mt-6 flex-col gap-4 sm:flex-row sm:gap-0">
					<BoxContent
						titleClassName="text-xl !text-black font-medium"
						title={`${data.rule.value}%`}
						description="Discount Amount"
					/>
					<BoxContent
						titleClassName="text-xl !text-black font-medium"
						title={data.regions.length}
						description="Valid Regions"
					/>
					<BoxContent
						titleClassName="text-xl !text-black font-medium"
						title={data.usage_count}
						description="Total Redemptions"
						lastItem
					/>
				</Flex>
			</Paper>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Configurations"
					className="mb-4"
					action={
						<Menu shadow="md" width={200}>
							<Menu.Target>
								<ActionIcon aria-label="More options">
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item
									icon={<NotePencil size={20} />}
									onClick={openEditConfigurations}
								>
									Edit configurations
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
				<Grid>
					<Grid.Col md={6}>
						<ListBoxItem
							order={1}
							title="Start date"
							description={formatDate(data.created_at, FULL_DATE_TIME_OPTIONS)}
						/>
					</Grid.Col>
					<Grid.Col md={6}>
						<ListBoxItem
							order={2}
							title="Number of redemptionse"
							description={data.usage_limit}
						/>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Conditions"
					className="mb-4"
					action={
						<Menu shadow="md" width={200}>
							<Menu.Target>
								<ActionIcon aria-label="More options">
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item icon={<Plus size={20} />} onClick={openAddCondition}>
									Add condition
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
				<Grid>
					<Grid.Col md={6}>
						<ListBoxItem
							order={1}
							title="Product"
							description="Discount is applicable to specific products"
						/>
					</Grid.Col>
					<Grid.Col md={6}>
						<ListBoxItem
							order={2}
							title="Collection"
							description="Discount is applicable to specific products"
						/>
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper>
				<PageTitle order={2} size="sm" title="Raw discount" />
				<JSONView data={data} className="mt-4" />
			</Paper>
			<ModalEditDiscount
				opened={editDiscountOpened}
				onClose={closeEditDiscount}
			/>
			<ModalDeleteDiscount
				opened={deleteDiscountOpened}
				onClose={closeDeleteDiscount}
			/>
			<ModalEditConfigurations
				opened={editConfigurationsOpened}
				onClose={closeEditConfigurations}
			/>
			<ModalAddCondition
				opened={addConditionOpened}
				onClose={closeAddCondition}
			/>
		</>
	)
}

export default DiscountDetails
