import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Title } from '@mantine/core'

import { Accordion, ModalFullscreen } from '@/components'
import { ModalOpenedProps } from '@/components/modal'
import {
	PriceConfiguration,
	PriceGeneral,
	PriceListType,
	PriceProducts,
} from '@/page-components/pricing/components'

const defaultValues = {
	type: 'sale',
}

const ModalAddNewPrice = (props: ModalOpenedProps) => {
	const sections = useMemo(
		() => [
			{
				value: 'type',
				label: 'Price list type',
				hint: 'Unlike with sale prices a price override will not communicate to the customer that the price is part of a sale.',
				required: true,
				content: PriceListType,
			},
			{
				value: 'general',
				label: 'General information',
				hint: 'General information for the price list.',
				required: true,
				content: PriceGeneral,
			},
			{
				value: 'configuration',
				label: 'Configuration',
				hint: 'Optional configuration for the price list',
				content: PriceConfiguration,
			},
			{
				value: 'prices',
				label: 'Prices',
				hint: 'Define the price overrides for the price list',
				required: true,
				content: PriceProducts,
			},
		],
		[]
	)
	const methods = useForm({
		defaultValues,
	})

	return (
		<ModalFullscreen {...props}>
			<FormProvider {...methods}>
				<form>
					<Title order={2} className="text-display-xs font-semibold">
						Create new pricing
					</Title>
					<Accordion sections={sections} defaultValue="type" />
				</form>
			</FormProvider>
		</ModalFullscreen>
	)
}

export default ModalAddNewPrice
