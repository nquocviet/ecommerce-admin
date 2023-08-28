export enum TransactionEnum {
	IN_PROGRESS = 'in_progress',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
}

const { IN_PROGRESS, COMPLETED, CANCELLED } = TransactionEnum

export const TRANSACTION_STATUSES = [IN_PROGRESS, COMPLETED, CANCELLED]

export const TRANSACTION_MESSAGES = [
	'Payment from',
	'Payment refund to',
	'Payment failed from',
] as const

export const TRANSACTION_LABELS = {
	[IN_PROGRESS]: 'In progress',
	[COMPLETED]: 'Completed',
	[CANCELLED]: 'Cancelled',
} as const

export const TRANSACTION_COLORS = {
	[IN_PROGRESS]: 'primary',
	[COMPLETED]: 'green',
	[CANCELLED]: 'red',
} as const
