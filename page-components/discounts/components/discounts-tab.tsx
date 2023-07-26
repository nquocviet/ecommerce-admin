import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { FunnelSimple } from '@phosphor-icons/react'

import { DISCOUNT_COLUMNS } from '@/columns/discount'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useDiscounts } from '@/lib/discount'

const DiscountsTab = () => {
	const { data, isLoading } = useDiscounts()
	const { control } = useForm()

	return (
		<>
			<form>
				<Flex justify="space-between" align="center" className="mb-4">
					<Button
						color="gray"
						variant="outline"
						size="xs"
						rightIcon={<FunnelSimple size={16} />}
					>
						Filters
					</Button>
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={DISCOUNT_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default DiscountsTab
