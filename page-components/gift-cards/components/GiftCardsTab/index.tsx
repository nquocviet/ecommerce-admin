import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { GIFT_CARD_COLUMNS } from '@/columns/gift-card'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useGiftCards } from '@/lib/gift-card'

const GiftCardsTab = () => {
	const { data, isLoading } = useGiftCards()
	const { control } = useForm()

	return (
		<>
			<form>
				<Flex justify="flex-end" align="center" className="mb-4">
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={GIFT_CARD_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default GiftCardsTab
