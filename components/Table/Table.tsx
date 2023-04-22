import React from 'react'
import { Loader, Text } from '@mantine/core'
import { DataTable, DataTableProps } from 'mantine-datatable'

type TableProps<T extends Record<string, unknown>> = DataTableProps<T> & {
	minWidth?: number | string
}

const Table = <T extends Record<string, unknown>>({
	records,
	columns,
	fetching,
	minWidth = 750,
	...rest
}: TableProps<T>) => {
	return (
		<DataTable
			minHeight={rest.minHeight || 125}
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
					minWidth,
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
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(<Loader size="sm" className="absolute top-[15%]" />) as any
			}
			emptyState={
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(<Text className="-translate-y-2.5">No data to display</Text>) as any
			}
			noRecordsText=""
		/>
	)
}

export default Table
