import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'
import { useRouter } from 'next/router'

import { GIFT_CARD_COLUMNS } from '@/columns/gift-card'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { ROUTES } from '@/constants/routes'
import { useGiftCards } from '@/lib/gift-card'

const GiftCardsTab = () => {
	const { data, isLoading } = useGiftCards()
	const { control } = useForm()
	const router = useRouter()

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
				onRowClick={({ id }) => {
					router.push({
						pathname: ROUTES.GIFT_CARD_DETAILS,
						query: { id },
					})
				}}
				page={1}
				onPageChange={() => null}
				highlightOnHover
			/>
		</>
	)
}

export default GiftCardsTab
