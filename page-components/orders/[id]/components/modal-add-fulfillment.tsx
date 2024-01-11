import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Grid, Text } from '@mantine/core'
import { Plus, Trash } from '@phosphor-icons/react'

import { REQUEST_RETURN_COLUMNS } from '@/columns/order'
import { Modal, ModalOpenedProps, Table, TextInput } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useOrderDetails } from '@/lib/order'

type DefaultValue = {
	shipping_method: string
	method: string
	metadata: Array<{
		key: string
		value: string
	}>
}

const defaultValues: DefaultValue = {
	shipping_method: '',
	method: 'refund',
	metadata: [],
}

const ModalAddFulfillment = (props: ModalOpenedProps) => {
	const { data, isLoading } = useOrderDetails()
	const { control } = useForm({ defaultValues })
	const {
		fields: metadata,
		append,
		remove,
	} = useFieldArray({
		control,
		name: 'metadata',
	})

	return (
		<Modal
			title="Create fulfillment"
			size="xl"
			confirmText="Complete"
			{...props}
		>
			<form>
				<Text className="mb-3 text-sm font-semibold">Items</Text>
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
				<Text className="mt-6 mb-3 text-sm font-semibold">Metadata</Text>
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={16}>
						{metadata.map((field, index) => (
							<Grid key={field.id}>
								<Grid.Col span={4}>
									<TextInput
										control={control}
										name={`metadata.${index}.key`}
										label="Key"
										placeholder="Some key"
									/>
								</Grid.Col>
								<Grid.Col span={8}>
									<Flex align="flex-end" gap={12}>
										<TextInput
											control={control}
											name={`metadata.${index}.value`}
											label="Value"
											placeholder="Some value"
											className="grow"
										/>
										<ActionIcon
											color="gray"
											variant="outline"
											size="lg"
											onClick={() => remove(index)}
										>
											<Trash size={20} />
										</ActionIcon>
									</Flex>
								</Grid.Col>
							</Grid>
						))}
						<Button
							color="gray"
							variant="outline"
							leftIcon={<Plus size={16} />}
							onClick={() => append({ key: '', value: '' })}
						>
							Add metadata
						</Button>
					</Flex>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalAddFulfillment
