import { MantineDataTableColumn } from '@/types/datatable'
import { GiftCardEntity } from '@/types/gift-card'
import { formatDate, formatMoney, getValue } from '@/utils'

export const GIFT_CARD_COLUMNS: MantineDataTableColumn<GiftCardEntity> = [
	{
		accessor: 'code',
		title: 'Code',
		width: '25%',
	},
	{
		accessor: 'order',
		title: 'Order',
		width: '10%',
		render: ({ order }) => {
			return getValue(order?.length)
		},
	},
	{
		accessor: 'value',
		title: 'Original amount',
		width: '25%',
		render: ({ value, region }) => {
			return formatMoney(value, region?.currency_code)
		},
	},
	{
		accessor: 'balance',
		title: 'Balance',
		width: '25%',
		render: ({ balance, region }) => {
			return formatMoney(balance, region?.currency_code)
		},
	},
	{
		accessor: 'created_at',
		title: 'Created at',
		width: '15%',
		render: ({ created_at }) => {
			return formatDate(created_at)
		},
	},
]
