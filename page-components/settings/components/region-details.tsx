import React from 'react'
import { ActionIcon, Button, Flex, Menu, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

import { PageTitle, Paper, ShippingOption } from '@/components'
import {
	ModalAddNewShippingOption,
	ModalDeleteRegion,
	ModalEditRegion,
} from '@/page-components/settings/components'

const RegionDetails = () => {
	const [
		deleteRegionOpened,
		{ open: openDeleteRegion, close: closeDeleteRegion },
	] = useDisclosure(false)
	const [
		addShippingOptionOpened,
		{ open: openAddShippingOption, close: closeAddShippingOption },
	] = useDisclosure(false)
	const [editRegionOpened, { open: openEditRegion, close: closeEditRegion }] =
		useDisclosure(false)

	return (
		<>
			<Flex direction="column" align="stretch" gap={16} className="h-full">
				<Paper>
					<PageTitle
						title="EU"
						size="sm"
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
										onClick={openEditRegion}
									>
										Edit
									</Menu.Item>
									<Menu.Item
										icon={<Trash size={20} />}
										sx={{
											color: 'var(--red-600)',
										}}
										onClick={openDeleteRegion}
									>
										Delete
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						}
					/>
					<Flex
						direction="column"
						gap={8}
						className="mt-8 text-sm text-gray-500"
					>
						<Flex justify="space-between">
							<Title order={2} className="text-lg font-semibold text-black">
								Details
							</Title>
						</Flex>
						<Flex justify="space-between">
							<Text>Currency</Text>
							<Text>
								<Text component="span" className="font-semibold text-black">
									EUR
								</Text>{' '}
								Euro
							</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Countries</Text>
							<Text>Denmark, France, Germany, Italy + 3 more</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Payment providers</Text>
							<Text>Manual</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Fulfillment providers</Text>
							<Text>Manual</Text>
						</Flex>
					</Flex>
				</Paper>
				<Paper>
					<PageTitle
						title="Shipping Options"
						description="Enter specifics about available regional shipment methods."
						size="sm"
						action={
							<Button
								color="gray"
								variant="outline"
								size="xs"
								onClick={openAddShippingOption}
							>
								Add option
							</Button>
						}
					/>
					<Flex direction="column" align="stretch" gap={16} className="mt-8">
						<ShippingOption
							title="PostFake Express"
							description="Flat Rate: 15.00 EUR - Min. subtotal: N/A - Max. subtotal: N/A"
						/>
					</Flex>
				</Paper>
				<Paper>
					<PageTitle
						title="Return Shipping Options"
						description="Enter specifics about available regional return shipment methods."
						size="sm"
						action={
							<Button
								color="gray"
								variant="outline"
								size="xs"
								onClick={openAddShippingOption}
							>
								Add option
							</Button>
						}
					/>
					<Flex direction="column" align="stretch" gap={16} className="mt-8">
						<ShippingOption
							title="PostFake Return"
							description="Flat Rate: 10.00 EUR - Min. subtotal: N/A - Max. subtotal: N/A"
						/>
						<ShippingOption
							title="I want to return it myself"
							description="Flat Rate: 0.00 EUR - Min. subtotal: N/A - Max. subtotal: N/A"
						/>
					</Flex>
				</Paper>
			</Flex>
			<ModalAddNewShippingOption
				opened={addShippingOptionOpened}
				onClose={closeAddShippingOption}
			/>
			<ModalEditRegion opened={editRegionOpened} onClose={closeEditRegion} />
			<ModalDeleteRegion
				opened={deleteRegionOpened}
				onClose={closeDeleteRegion}
			/>
		</>
	)
}

export default RegionDetails
