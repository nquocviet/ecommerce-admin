import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, Paper, RadioBox, RadioGroup } from '@/components'
import { STORE_NAME } from '@/constants/common'
import { ModalAddNewSalesChannel } from '@/page-components/settings/components'

const defaultValues = {
	channel: 'default',
}

const Channels = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const { control, watch } = useForm({
		defaultValues,
	})
	const channelSelected = watch('channel')

	return (
		<Paper className="h-full">
			<PageTitle
				title="Sales channels"
				description="Control which products are available in which channels"
				size="sm"
				action={
					<ActionIcon aria-label="Create new sales channel">
						<Plus size={20} weight="bold" onClick={open} />
					</ActionIcon>
				}
			/>
			<form className="mt-8">
				<RadioGroup control={control} name="channel">
					<Flex direction="column" gap={16}>
						<RadioBox
							value="default"
							valueSelected={channelSelected}
							label="Default sales channel"
							description={`Created by ${STORE_NAME}`}
							truncate
						/>
						<RadioBox
							value="customer"
							valueSelected={channelSelected}
							label="Customer channel"
							description="Corrupti voluptatem deserunt id tempore lorem"
							truncate
						/>
					</Flex>
				</RadioGroup>
			</form>
			<ModalAddNewSalesChannel opened={opened} onClose={close} />
		</Paper>
	)
}

export default Channels
