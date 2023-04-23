import React from 'react'
import { ActionIcon, Button, Flex, Menu, Paper, Text } from '@mantine/core'
import {
	DotsThree,
	NotePencil,
	Trash,
	TreeStructure,
} from '@phosphor-icons/react'

import { Chip, Dots, PageTitle } from '@/components'
import { useProductDetail } from '@/lib/product'
import { useSalesChannels } from '@/lib/sales-channel'
import { getValue } from '@/utils'

const ProductGeneralInformation = () => {
	const { data } = useProductDetail()
	const { data: salesChannels } = useSalesChannels()

	return (
		<Paper shadow="xs" p="xl">
			<PageTitle
				order={2}
				size="sm"
				title={data?.title || ''}
				description={data?.description || ''}
				action={
					<Flex gap={12}>
						<Menu shadow="md" width={160}>
							<Menu.Target>
								<Button color="gray" variant="white" size="xs">
									<Flex align="center" gap={8}>
										<Dots size={6} color="green" />
										Published
									</Flex>
								</Button>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item>
									<Flex align="center" gap={8}>
										<Dots size={6} color="gray" />
										Draft
									</Flex>
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
						<Menu shadow="md" width={240}>
							<Menu.Target>
								<ActionIcon>
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item icon={<NotePencil size={18} />}>
									Edit General Information
								</Menu.Item>
								<Menu.Item icon={<TreeStructure size={18} />}>
									Edit Sale Channels
								</Menu.Item>
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
				}
			/>
			<div className="mt-8 text-sm text-gray-600">
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={12}>
						<Text className="font-semibold text-black">Details</Text>
						<Flex justify="space-between">
							<Text>Subtitle</Text>
							<Text>{getValue(data?.subtitle)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Handle</Text>
							<Text>{getValue('/' + data?.handle)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Type</Text>
							<Text>{getValue(data?.type)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Collection</Text>
							<Text>{getValue(data?.collection.title)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Discountable</Text>
							<Text className="capitalize">
								{getValue(String(data?.discountable))}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</div>
			<Flex direction="column" gap={12} className="mt-8 text-sm">
				<Text className="font-semibold text-black">Sales channels</Text>
				<Flex gap={12}>
					{data?.sales_channels.map(({ id, name }) => (
						<Chip key={id} label={name} />
					))}
				</Flex>
				<Text className="text-gray-600">
					Available in{' '}
					<Text component="span" className="font-semibold">
						{data?.sales_channels.length}
					</Text>{' '}
					out of{' '}
					<Text component="span" className="font-semibold">
						{salesChannels?.length}
					</Text>{' '}
					Sales Channels
				</Text>
			</Flex>
		</Paper>
	)
}

export default ProductGeneralInformation
