import React, { useState } from 'react'
import { Accordion, Button, Flex, Text } from '@mantine/core'

import { CloseIcon, ModalFullscreen } from '@/components'

import {
	Attributes,
	GeneralInformation,
	Media,
	Organize,
	Thumbnail,
	Variants,
} from './components'

type AddNewProductModalProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

const sections = [
	{
		value: 'general-information',
		label: 'General information',
		required: true,
		content: GeneralInformation,
	},
	{
		value: 'organize',
		label: 'Organize',
		content: Organize,
	},
	{
		value: 'variants',
		label: 'Variants',
		content: Variants,
	},
	{
		value: 'attributes',
		label: 'Attributes',
		content: Attributes,
	},
	{
		value: 'thumbnail',
		label: 'Thumbnail',
		content: Thumbnail,
	},
	{
		value: 'media',
		label: 'Media',
		content: Media,
	},
]

const AddNewProductModal = ({ opened, onClose }: AddNewProductModalProps) => {
	const [tabsOpened, setTabsOpened] = useState<string[]>([
		'general-information',
	])

	const isTabOpened = (tab: string) => {
		return tabsOpened.includes(tab)
	}

	return (
		<ModalFullscreen
			opened={opened}
			onClose={onClose}
			action={
				<Flex align="stretch" gap={16}>
					<Button color="gray" variant="outline">
						Save as draft
					</Button>
					<Button>Publish product</Button>
				</Flex>
			}
		>
			<div className="mx-auto mt-10 max-w-[600px]">
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
					{sections.map(({ value, label, required, content: Content }) => (
						<Accordion.Item key={value} value={value}>
							<Accordion.Control
								chevron={<CloseIcon open={isTabOpened(value)} />}
							>
								<Text className="text-lg font-semibold">
									{label}
									{required && (
										<Text component="span" className="ml-0.5 text-red-600">
											*
										</Text>
									)}
								</Text>
							</Accordion.Control>
							<Accordion.Panel>
								<Content />
							</Accordion.Panel>
						</Accordion.Item>
					))}
				</Accordion>
			</div>
		</ModalFullscreen>
	)
}

export default AddNewProductModal
