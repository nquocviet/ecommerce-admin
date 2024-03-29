import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Flex, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, Paper, RadioBox, RadioGroup } from '@/components'
import { ModalAddRegion } from '@/page-components/settings/components'

const defaultValues = {
	market: 'eu',
}

const Markets = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const { control, watch } = useForm({
		defaultValues,
	})
	const marketSelected = watch('market')

	return (
		<>
			<Paper className="h-full">
				<PageTitle
					title="Regions"
					description="Manage the markets that you will operate within."
					size="sm"
					action={
						<ActionIcon aria-label="Create new region" onClick={open}>
							<Plus size={20} weight="bold" />
						</ActionIcon>
					}
				/>
				<form className="mt-8">
					<RadioGroup control={control} name="market">
						<Flex direction="column" gap={16}>
							<RadioBox
								value="eu"
								valueSelected={marketSelected}
								label={
									<Text className="truncate">
										EU{' '}
										<Text
											component="span"
											className="text-sm font-regular text-gray-500"
										>
											(Denmark, France, Germany, Italy, Spain, Sweden, United
											Kingdom)
										</Text>
									</Text>
								}
								description={
									<>
										<Text className="mt-0.5 truncate text-xs">
											Payment providers: Manual
										</Text>
										<Text className="mt-0.5 truncate text-xs">
											Fulfillment providers: Manual
										</Text>
									</>
								}
								truncate
							/>
							<RadioBox
								value="na"
								valueSelected={marketSelected}
								label={
									<Text className="truncate">
										NA{' '}
										<Text
											component="span"
											className="text-sm font-regular text-gray-500"
										>
											(Canada, United States)
										</Text>
									</Text>
								}
								description={
									<>
										<Text className="mt-0.5 truncate text-xs">
											Payment providers: Manual
										</Text>
										<Text className="mt-0.5 truncate text-xs">
											Fulfillment providers: Manual
										</Text>
									</>
								}
								truncate
							/>
						</Flex>
					</RadioGroup>
				</form>
			</Paper>
			<ModalAddRegion opened={opened} onClose={close} />
		</>
	)
}

export default Markets
