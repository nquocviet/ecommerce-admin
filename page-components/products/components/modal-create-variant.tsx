import React, { useMemo } from 'react'

import { Accordion, Modal, ModalOpenedProps } from '@/components'
import {
	VariantGeneral,
	VariantShipping,
	VariantStock,
} from '@/page-components/products/components'

const ModalCreateVariant = (props: ModalOpenedProps) => {
	const sections = useMemo(
		() => [
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
		],
		[]
	)

	return (
		<Modal
			title="Create variant"
			size="xl"
			zIndex={201}
			confirmText="Save and close"
			{...props}
		>
			<Accordion sections={sections} defaultValue="general" />
		</Modal>
	)
}

export default ModalCreateVariant
