import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Accordion, ModalFullscreen, ModalOpenedProps } from '@/components'
import {
	RegionNewDetails,
	RegionNewProviders,
} from '@/page-components/settings/components'

const ModalAddNewRegion = (props: ModalOpenedProps) => {
	const sections = useMemo(
		() => [
			{
				value: 'region-details',
				label: 'Details',
				required: true,
				content: RegionNewDetails,
			},
			{
				value: 'region-providers',
				label: 'Providers',
				required: true,
				content: RegionNewProviders,
			},
		],
		[]
	)
	const methods = useForm()

	return (
		<ModalFullscreen confirmText="Create region" {...props}>
			<FormProvider {...methods}>
				<form>
					<Accordion sections={sections} defaultValue="region-details" />
				</form>
			</FormProvider>
		</ModalFullscreen>
	)
}

export default ModalAddNewRegion
