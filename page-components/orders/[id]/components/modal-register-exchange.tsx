import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, Text } from '@mantine/core'

import { REQUEST_RETURN_COLUMNS } from '@/columns/order'
import { Modal, ModalOpenedProps, Select, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useOrderDetails } from '@/lib/order'

const ModalRegisterExchange = (props: ModalOpenedProps) => {
	const { data, isLoading } = useOrderDetails()
	const { control } = useForm()

	return (
		<Modal
			title="Register exchange"
			size="xl"
			confirmText="Complete"
			{...props}
		>
			<form>
				<Text className="mb-3 text-sm font-semibold">Items to return</Text>
				<Table
					records={data?.items}
					columns={REQUEST_RETURN_COLUMNS}
					fetching={isLoading}
					minWidth="auto"
					totalRecords={0}
					page={1}
					recordsPerPage={PAGE_SIZE}
					onPageChange={() => null}
				/>
				<Text className="mb-3 text-sm font-semibold">Shipping</Text>
				<Select
					name="shipping_method"
					control={control}
					label="Shipping Method"
					placeholder="Add a shipping method"
					className="mb-6"
					data={[]}
				/>
				<Flex justify="space-between" align="center" className="mb-4">
					<Text className="text-sm font-semibold">Items to send</Text>
					<Button color="gray" variant="outline" size="sm">
						Add product
					</Button>
				</Flex>
				<div>
					<Flex
						justify="space-between"
						align="center"
						className="mb-4 last:mb-0"
					>
						<Text className="text-sm text-gray-500">Return total</Text>
						<Text className="text-xs text-gray-500">€25.00 EUR</Text>
					</Flex>
					<Flex
						justify="space-between"
						align="center"
						className="mb-4 last:mb-0"
					>
						<Text className="text-sm text-gray-500">Additional total</Text>
						<Text className="text-xs text-gray-500">€10.00 EUR</Text>
					</Flex>
					<Flex
						justify="space-between"
						align="center"
						className="mb-4 last:mb-0"
					>
						<Text className="text-sm text-gray-500">Outbound shipping</Text>
						<Text className="text-sm text-gray-500">
							Calculated at checkout
						</Text>
					</Flex>
					<Flex
						justify="space-between"
						align="center"
						className="mb-4 last:mb-0"
					>
						<Text className="text-sm font-semibold text-gray-500">
							Estimated difference
						</Text>
						<Text className="text-lg font-semibold text-black">€35.00 EUR</Text>
					</Flex>
				</div>
			</form>
		</Modal>
	)
}

export default ModalRegisterExchange
