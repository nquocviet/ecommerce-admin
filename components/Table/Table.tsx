import React from 'react'
import { Loader, Text } from '@mantine/core'
import { DataTable, DataTableProps } from 'mantine-datatable'

type TableProps<T extends Record<string, unknown>> = DataTableProps<T> & {
	minWidth?: number | string
	size?: 'sm' | 'md'
	disableHead?: boolean
}

const Table = <T extends Record<string, unknown>>({
	records,
	columns,
	fetching,
	size = 'md',
	minWidth = 750,
	disableHead,
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
			sx={{
				height: 'auto',
				flexGrow: 1,
				'& > div': {
					flex: 'unset',
				},
				'& > div:first-child': {
					overflow: 'unset',
				},
				'& table': {
					minWidth,
				},
				...(size === 'sm' && {
					'& th, & td': {
						fontSize: 'var(--fs-text-xs) !important',
					},
				}),
			}}
			styles={() => ({
				header: {
					height: disableHead ? 0 : 40,
				},
				pagination: {
					borderTopColor: 'transparent',
					marginTop: 'auto',
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
