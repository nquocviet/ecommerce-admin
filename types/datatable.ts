import { DataTableColumn } from 'mantine-datatable'

export type MantineDataTableColumn<T extends Record<string, unknown>> =
	DataTableColumn<T>[]
