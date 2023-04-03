import React from 'react'
import { ActionIcon, Menu, Paper } from '@mantine/core'
import { DotsThree, GearSix } from '@phosphor-icons/react'

import { PageTitle } from '@/components'

const Regions = () => {
	return (
		<Paper shadow="xs" p="xl">
			<PageTitle
				title="Regions"
				description="Select the region you wish to manage taxes for"
				size="sm"
				action={
					<Menu shadow="md" width={200}>
						<Menu.Target>
							<ActionIcon>
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item icon={<GearSix size={18} />}>
								Go to Region settings
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				}
			/>
		</Paper>
	)
}

export default Regions
