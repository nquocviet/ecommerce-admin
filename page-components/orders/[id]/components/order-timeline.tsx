import React from 'react'
import { ActionIcon, Menu, TextInput } from '@mantine/core'
import {
	ArrowCounterClockwise,
	ArrowsClockwise,
	DotsThree,
	Info,
	PaperPlaneTilt,
	Smiley,
} from '@phosphor-icons/react'

import { PageTitle, Paper } from '@/components'

const OrderTimeline = () => {
	return (
		<Paper>
			<PageTitle
				order={2}
				size="sm"
				title="Timeline"
				className="mb-6"
				action={
					<Menu shadow="md" width={220}>
						<Menu.Target>
							<ActionIcon>
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item icon={<ArrowCounterClockwise size={20} />}>
								Request return
							</Menu.Item>
							<Menu.Item icon={<ArrowsClockwise size={20} />}>
								Register exchange
							</Menu.Item>
							<Menu.Item icon={<Info size={20} />}>Register claim</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				}
			/>
			<TextInput
				placeholder="Write a note..."
				size="md"
				icon={<Smiley size={20} />}
				rightSection={<PaperPlaneTilt size={20} />}
			/>
		</Paper>
	)
}

export default OrderTimeline
