import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { PageTitle, Paper } from '@/components'

import ModalEditCurrencies from './modal-edit-currencies'

const StoreCurrencies = () => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Flex direction="column" align="stretch" gap={16} className="h-full">
				<Paper>
					<PageTitle
						title="Currencies"
						description="Manage the markets that you will operate within."
						size="sm"
					/>
				</Paper>
				<Paper>
					<PageTitle
						title="Store currencies"
						description="All the currencies available in your store."
						size="sm"
						action={
							<Button color="gray" variant="outline" size="xs" onClick={open}>
								Edit currencies
							</Button>
						}
					/>
				</Paper>
			</Flex>
			<ModalEditCurrencies opened={opened} onClose={close} />
		</>
	)
}

export default StoreCurrencies
