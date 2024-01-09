import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid } from '@mantine/core'

import { CUSTOMERS_GROUP_CONDITION_COLUMNS } from '@/columns/customer-group'
import {
	InputSearch,
	Loader,
	Modal,
	ModalOpenedProps,
	RadioBox,
	RadioGroup,
	Table,
} from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useCustomerGroups } from '@/lib/customer'

const defaultValues = {
	type: 'in',
	search: '',
}

const ModalAddCondition = (props: ModalOpenedProps) => {
	const { data, isLoading } = useCustomerGroups()
	const { control, watch } = useForm({ defaultValues })
	const typeSelected = watch('type')

	if (isLoading || !data) return <Loader />

	return (
		<Modal
			title="Add conditions"
			size="xl"
			confirmText="Save and close"
			{...props}
		>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<RadioGroup control={control} name="type">
						<Grid>
							<Grid.Col xs={6}>
								<RadioBox
									value="in"
									valueSelected={typeSelected}
									label="In"
									description="Applies to the selected items."
									truncate
								/>
							</Grid.Col>
							<Grid.Col xs={6}>
								<RadioBox
									value="not_in"
									valueSelected={typeSelected}
									label="Not in"
									description="Applies to all items except the selected items."
									truncate
								/>
							</Grid.Col>
						</Grid>
					</RadioGroup>
					<form>
						<Flex justify="flex-end">
							<InputSearch
								name="search"
								control={control}
								placeholder="Search"
							/>
						</Flex>
					</form>
					<Table
						records={data}
						columns={CUSTOMERS_GROUP_CONDITION_COLUMNS}
						fetching={isLoading}
						minWidth="auto"
						totalRecords={data?.length}
						recordsPerPage={PAGE_SIZE}
						page={1}
						onPageChange={() => null}
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalAddCondition
