import { TransactionEnum } from '@/constants/transaction'

export type TransactionEntity = {
	id: string
	message: string
	customer: string
	amount: number
	status: TransactionEnum
	createdAt: Date
}
