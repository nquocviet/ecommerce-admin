import React from 'react'
import { Loader, Text } from '@mantine/core'
import { DataTable, DataTableProps } from 'mantine-datatable'

const Table = <T,>({
	records,
	columns,
	fetching,
	...rest
}: DataTableProps<T>) => {
	return (
		<DataTable
			minHeight={125}
			records={records}
			columns={columns}
			fetching={fetching}
			borderColor="var(--gray-200)"
			rowBorderColor="var(--gray-200)"
			rowClassName="h-10"
			styles={() => ({
				root: {
					height: 'auto',
					flexGrow: 1,
				},
				header: {
					height: 40,
				},
				pagination: {
					borderTopColor: 'transparent',
					paddingLeft: 0,
					paddingRight: 0,
				},
			})}
			{...rest}
			withBorder={false}
			customLoader={
				(<Loader size="sm" className="absolute top-[15%]" />) as any
			}
			emptyState={
				(<Text className="-translate-y-2.5">No data to display</Text>) as any
			}
			noRecordsText=""
		/>
	)
}

export default Table
