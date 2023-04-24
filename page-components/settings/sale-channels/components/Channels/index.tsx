import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Flex, Paper } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, RadioBox, RadioGroup } from '@/components'
import { STORE_NAME } from '@/constants/common'

const defaultValues = {
	channel: 'default',
}

const Channels = () => {
	const { control, watch } = useForm({
		defaultValues,
	})
	const channelSelected = watch('channel')

	return (
		<Paper shadow="xs" p="xl" className="h-full">
			<PageTitle
				title="Sales channels"
				description="Control which products are available in which channels"
				size="sm"
				action={
					<ActionIcon>
						<Plus size={20} weight="bold" />
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
		</Paper>
	)
}

export default Channels
