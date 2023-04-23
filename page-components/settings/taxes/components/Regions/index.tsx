import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Flex, Menu, Paper } from '@mantine/core'
import { DotsThree, GearSix } from '@phosphor-icons/react'

import { PageTitle, RadioBox, RadioGroup } from '@/components'

const defaultValues = {
	region: 'eu',
}

const Regions = () => {
	const { control, watch } = useForm({
		defaultValues,
	})
	const regionSelected = watch('region')

	return (
		<Paper shadow="xs" p="xl" className="h-full">
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
			<form className="mt-8">
				<RadioGroup control={control} name="region">
					<Flex direction="column" gap={16}>
						<RadioBox
							value="eu"
							valueSelected={regionSelected}
							label="EU"
							description="Denmark, France, Germany, Italy, Spain, Sweden, United Kingdom"
							truncate
						/>
						<RadioBox
							value="na"
							valueSelected={regionSelected}
							label="NA"
							description="Canada, United States"
							truncate
						/>
					</Flex>
				</RadioGroup>
			</form>
		</Paper>
	)
}

export default Regions
