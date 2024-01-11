import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Text } from '@mantine/core'

import { REQUEST_RETURN_COLUMNS } from '@/columns/order'
import {
	Modal,
	ModalOpenedProps,
	NumberInput,
	Select,
	Table,
	TextInput,
} from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useOrderDetails } from '@/lib/order'

const ModalRequestReturn = (props: ModalOpenedProps) => {
	const { data, isLoading } = useOrderDetails()
	const { control } = useForm()

	return (
		<Modal title="Request return" size="xl" confirmText="Submit" {...props}>
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
				<Text className="mb-3 text-sm font-semibold">Total refund</Text>
				<Grid>
					<Grid.Col span={3}>
						<TextInput
							name="currency"
							control={control}
							label="Currency"
							placeholder="USD"
						/>
					</Grid.Col>
					<Grid.Col span={9}>
						<NumberInput
							name="amount"
							control={control}
							label="Amount"
							placeholder="0.00"
							textIcon="$"
						/>
					</Grid.Col>
				</Grid>
			</form>
		</Modal>
	)
}

export default ModalRequestReturn
