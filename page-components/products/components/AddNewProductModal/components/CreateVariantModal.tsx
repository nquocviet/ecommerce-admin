import React, { useState } from 'react'
import { Accordion, Button, Text } from '@mantine/core'

import { CloseIcon, Modal, ModalAction } from '@/components'

import VariantGeneral from './VariantGeneral'
import VariantShipping from './VariantShipping'
import VariantStock from './VariantStock'

type CreateVariantModalProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

const sections = [
	{
		value: 'general',
		label: 'General',
		required: true,
		content: VariantGeneral,
	},
	{
		value: 'stock',
		label: 'Stock & Inventory',
		content: VariantStock,
	},
	{
		value: 'shipping',
		label: 'Shipping',
		content: VariantShipping,
	},
]

const CreateVariantModal = ({ opened, onClose }: CreateVariantModalProps) => {
	const [tabsOpened, setTabsOpened] = useState<string[]>(['general'])

	const isTabOpened = (tab: string) => {
		return tabsOpened.includes(tab)
	}

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Create Variant"
			size="xl"
			zIndex={201}
			action={
				<ModalAction>
					<Button
						size="sm"
						color="gray"
						variant="outline"
						onClick={() => onClose()}
					>
						Cancel
					</Button>
					<Button size="sm">Save and close</Button>
				</ModalAction>
			}
			centered
		>
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
		</Modal>
	)
}

export default CreateVariantModal
