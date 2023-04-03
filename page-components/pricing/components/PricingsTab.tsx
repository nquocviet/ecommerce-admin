import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { FunnelSimple } from '@phosphor-icons/react'

import { columns } from '@/columns/pricing'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { usePricing } from '@/lib/pricing'

const PricingsTab = () => {
	const { data, isLoading } = usePricing()
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
				columns={columns}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default PricingsTab
