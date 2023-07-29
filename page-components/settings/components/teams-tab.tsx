import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { TEAM_COLUMNS } from '@/columns/team'
import { FilterPopover, InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useTeamMembers } from '@/lib/team'

const filterOptions = [
	{ value: 'status', label: 'Status' },
	{ value: 'permissions', label: 'Permissions' },
]

const TeamsTab = () => {
	const { data, isLoading } = useTeamMembers()
	const { control } = useForm()

	return (
		<>
			<form>
				<Flex justify="space-between" align="center" className="mb-4">
					<FilterPopover filterOptions={filterOptions} />
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={TEAM_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default TeamsTab
