import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Accordion, ModalFullscreen, ModalOpenedProps } from '@/components'
import {
	DiscountConditions,
	DiscountConfiguration,
	DiscountGeneral,
	DiscountType,
} from '@/page-components/discounts/components'

const defaultValues = {
	type: 'percentage',
	start_date_time: new Date(),
	expiry_date_time: new Date(),
}

const ModalAddDiscount = (props: ModalOpenedProps) => {
	const sections = useMemo(
		() => [
			{
				value: 'discount-type',
				label: 'Discount type',
				hint: 'Select a discount type',
				required: true,
				content: DiscountType,
			},
			{
				value: 'discount-general',
				label: 'General',
				content: DiscountGeneral,
			},
			{
				value: 'discount-configuration',
				label: 'Configuration',
				content: DiscountConfiguration,
			},
			{
				value: 'discount-conditions',
				label: 'Conditions',
				hint: 'Add conditions to your discount',
				content: DiscountConditions,
			},
		],
		[]
	)
	const methods = useForm({
		defaultValues,
	})

	return (
		<ModalFullscreen
			cancelText="Save as draft"
			confirmText="Publish discount"
			{...props}
		>
			<FormProvider {...methods}>
				<form>
					<Accordion sections={sections} defaultValue="discount-type" />
				</form>
			</FormProvider>
		</ModalFullscreen>
	)
}

export default ModalAddDiscount
