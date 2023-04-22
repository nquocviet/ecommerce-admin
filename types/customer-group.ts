import { BaseEntity, MetaDataEntity } from './common'
import { CustomerEntity } from './customer'

export type CustomerGroupEntity = BaseEntity & {
	name: string
	metadata: MetaDataEntity
	customers: CustomerEntity[]
}
