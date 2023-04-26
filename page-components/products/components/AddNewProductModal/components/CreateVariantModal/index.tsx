import React, { useMemo, useState } from 'react'
import { Accordion, Text } from '@mantine/core'

import { CloseIcon, Modal } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import {
	VariantGeneral,
	VariantShipping,
	VariantStock,
} from '@/page-components/products/components/AddNewProductModal/components'

const CreateVariantModal = (props: ModalOpenedProps) => {
	const sections = useMemo(() => {
		return [
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
	}, [])
	const [tabsOpened, setTabsOpened] = useState<string[]>(['general'])

	const isTabOpened = (tab: string) => {
		return tabsOpened.includes(tab)
	}

	return (
		<Modal
			title="Create variant"
			size="xl"
			zIndex={201}
			confirmText="Save and close"
			{...props}
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
