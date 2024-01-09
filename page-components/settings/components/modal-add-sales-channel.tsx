import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Title } from '@mantine/core'

import { Accordion, ModalFullscreen, ModalOpenedProps } from '@/components'
import { SalesChannelGeneral } from '@/page-components/settings/components'

const ModalAddSalesChannel = (props: ModalOpenedProps) => {
	const sections = useMemo(
		() => [
			{
				value: 'general',
				label: 'General information',
				required: true,
				content: SalesChannelGeneral,
			},
		],
		[]
	)
	const methods = useForm()

	return (
		<ModalFullscreen
			cancelText="Save as draft"
			confirmText="Publish channel"
			{...props}
		>
			<FormProvider {...methods}>
				<form>
					<Title order={2} className="text-display-xs font-semibold">
						Create new sales channel
					</Title>
					<Accordion sections={sections} defaultValue="general" />
				</form>
			</FormProvider>
		</ModalFullscreen>
	)
}

export default ModalAddSalesChannel
