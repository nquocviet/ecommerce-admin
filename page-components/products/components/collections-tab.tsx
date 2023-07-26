import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { COLLECTION_COLUMNS } from '@/columns/collection'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useCollections } from '@/lib/collection'

const defaultValues = {
	search: '',
}

const CollectionsTab = () => {
	const { data, isLoading } = useCollections()
	const { control } = useForm({
		defaultValues,
	})

	return (
		<>
			<form>
				<Flex justify="flex-end" align="center" className="mb-4">
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={COLLECTION_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default CollectionsTab
