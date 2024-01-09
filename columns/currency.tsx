import { Checkbox } from '@mantine/core'

import { CurrencyEntity } from '@/types/currency'
import { MantineDataTableColumn } from '@/types/datatable'

export const CURRENCY_COLUMNS: MantineDataTableColumn<CurrencyEntity> = [
	{
		accessor: '',
		title: <Checkbox />,
		width: '5%',
		render: () => {
			return <Checkbox />
		},
	},
	{
		accessor: 'name',
		title: 'Name',
		width: '95%',
	},
]
