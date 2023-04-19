import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { columns } from '@/columns/group'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useGroups } from '@/lib/group'

const GroupsTab = () => {
	const { data, isLoading } = useGroups()
	const { control } = useForm()

	return (
		<>
			<form>
				<Flex justify="flex-end" align="center" className="mb-4">
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

export default GroupsTab
