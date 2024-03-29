import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Flex, Menu } from '@mantine/core'
import { DotsThree, GearSix } from '@phosphor-icons/react'
import Link from 'next/link'

import { PageTitle, Paper, RadioBox, RadioGroup } from '@/components'
import { ROUTES } from '@/constants/routes'

const defaultValues = {
	region: 'eu',
}

const Regions = () => {
	const { control, watch } = useForm({
		defaultValues,
	})
	const regionSelected = watch('region')

	return (
		<Paper className="h-full">
			<PageTitle
				title="Regions"
				description="Select the region you wish to manage taxes for"
				size="sm"
				action={
					<Menu shadow="md" width={220}>
						<Menu.Target>
							<ActionIcon aria-label="More options">
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								component={Link}
								href={ROUTES.SETTINGS.REGIONS}
								icon={<GearSix size={20} />}
							>
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
