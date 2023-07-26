import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Accordion, ModalFullscreen } from '@/components'
import { ModalOpenedProps } from '@/components/modal'
import {
	ProductAttributes,
	ProductGeneralInformation,
	ProductMedia,
	ProductOrganize,
	ProductThumbnail,
	ProductVariants,
} from '@/page-components/products/components'

const ModalAddNewProduct = (props: ModalOpenedProps) => {
	const sections = useMemo(
		() => [
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
		],
		[]
	)

	const methods = useForm()

	return (
		<ModalFullscreen
			cancelText="Save as draft"
			confirmText="Publish product"
			{...props}
		>
			<FormProvider {...methods}>
				<form>
					<Accordion sections={sections} defaultValue="general-information" />
				</form>
			</FormProvider>
		</ModalFullscreen>
	)
}

export default ModalAddNewProduct
