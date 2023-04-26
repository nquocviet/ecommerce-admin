import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Accordion, Flex, Text, Title } from '@mantine/core'

import { CloseIcon, ModalFullscreen, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const AddNewSalesChannelModal = (props: ModalOpenedProps) => {
	const [tabsOpened, setTabsOpened] = useState<string[]>(['general'])
	const { control } = useForm()

	const isTabOpened = (tab: string) => {
		return tabsOpened.includes(tab)
	}

	return (
		<ModalFullscreen
			cancelText="Save as draft"
			confirmText="Publish channel"
			{...props}
		>
			<form className="mx-auto mt-10 max-w-[680px]">
				<Title order={2} className="text-display-xs font-semibold">
					Create new sales channel
				</Title>
				<Accordion
					value={tabsOpened}
					onChange={setTabsOpened}
					styles={() => ({
						chevron: {
							'&[data-rotate]': {
								transform: 'unset',
							},
						},
					})}
					multiple
				>
					<Accordion.Item value="general" className="py-1">
						<Accordion.Control
							chevron={<CloseIcon open={isTabOpened('general')} />}
						>
							<Text className="text-lg font-semibold">General information</Text>
						</Accordion.Control>
						<Accordion.Panel>
							<Flex direction="column" align="stretch" gap={16}>
								<TextInput
									name="title"
									control={control}
									label="Title"
									placeholder="Website, app, Amazon, physical store POS, facebook product feed..."
									required
								/>
								<TextInput
									name="description"
									control={control}
									label="Description"
									placeholder="Available products at our website, app..."
								/>
							</Flex>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			</form>
		</ModalFullscreen>
	)
}

export default AddNewSalesChannelModal
