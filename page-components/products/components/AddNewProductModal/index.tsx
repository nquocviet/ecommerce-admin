import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Accordion, Button, Flex, Text } from '@mantine/core'

import { CloseIcon, ModalFullscreen } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

import {
	ProductAttributes,
	ProductGeneralInformation,
	ProductMedia,
	ProductOrganize,
	ProductThumbnail,
	ProductVariants,
} from './components'

const sections = [
	{
		value: 'general-information',
		label: 'General information',
		required: true,
		content: ProductGeneralInformation,
	},
	{
		value: 'organize',
		label: 'Organize',
		content: ProductOrganize,
	},
	{
		value: 'variants',
		label: 'Variants',
		content: ProductVariants,
	},
	{
		value: 'attributes',
		label: 'Attributes',
		content: ProductAttributes,
	},
	{
		value: 'thumbnail',
		label: 'Thumbnail',
		content: ProductThumbnail,
	},
	{
		value: 'media',
		label: 'Media',
		content: ProductMedia,
	},
]

const AddNewProductModal = ({ opened, onClose }: ModalOpenedProps) => {
	const [tabsOpened, setTabsOpened] = useState<string[]>([
		'general-information',
	])
	const methods = useForm()

	const isTabOpened = (tab: string) => {
		return tabsOpened.includes(tab)
	}

	return (
		<ModalFullscreen
			opened={opened}
			onClose={onClose}
			action={
				<Flex align="stretch" gap={16}>
					<Button size="sm" color="gray" variant="outline">
						Save as draft
					</Button>
					<Button size="sm">Publish product</Button>
				</Flex>
			}
		>
			<FormProvider {...methods}>
				<form className="mx-auto mt-10 max-w-[680px]">
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
							<Accordion.Item key={value} value={value} className="py-1">
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
				</form>
			</FormProvider>
		</ModalFullscreen>
	)
}

export default AddNewProductModal
