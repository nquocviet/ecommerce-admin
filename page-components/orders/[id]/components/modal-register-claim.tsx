import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Text } from '@mantine/core'

import { REQUEST_RETURN_COLUMNS } from '@/columns/order'
import { Modal, ModalOpenedProps, Radio, Select, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useOrderDetails } from '@/lib/order'

const defaultValues = {
	shipping_method: '',
	method: 'refund',
}

const ModalRegisterClaim = (props: ModalOpenedProps) => {
	const { data, isLoading } = useOrderDetails()
	const { control } = useForm({ defaultValues })

	return (
		<Modal title="Register claim" size="xl" confirmText="Submit" {...props}>
			<form>
				<Text className="mb-3 text-sm font-semibold">Items to claim</Text>
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
				<Text className="text-sm font-semibold">Shipping for return items</Text>
				<Text className="mb-3 text-sm text-gray-500">
					Return shipping for items claimed by the customer is complimentary.
				</Text>
				<Select
					name="shipping_method"
					control={control}
					label="Shipping Method"
					placeholder="Add a shipping method"
					className="mb-6"
					data={[]}
				/>
				<Text className="mb-3 text-sm font-semibold">Total refund</Text>
				<Flex align="center" gap={24}>
					<Radio
						name="method"
						control={control}
						value="refund"
						label="Refund"
					/>
					<Radio
						name="method"
						control={control}
						value="replace"
						label="Replace"
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalRegisterClaim
