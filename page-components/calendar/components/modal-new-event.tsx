import React, { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Modal, ModalOpenedProps } from '@/components'
import { FormNewEvent } from '@/page-components/calendar/components'
import { EventContext } from '@/providers/event-provider'
import { getCurrentTime } from '@/utils'

const defaultValues = {
	title: '',
	date: new Date(),
	startTime: getCurrentTime(),
	endTime: getCurrentTime(1),
	guests: [],
	location: '',
	description: '',
}

const ModalNewEvent = (props: ModalOpenedProps) => {
	const methods = useForm({
		defaultValues,
	})
	const context = useContext(EventContext)
	const { handleSubmit } = methods

	console.log(defaultValues)

	if (!context) return null

	const { onSubmit } = context

	return (
		<Modal
			title="Add new event"
			size="lg"
			confirmText="Save"
			onConfirm={handleSubmit(onSubmit)}
			{...props}
		>
			<FormProvider {...methods}>
				<FormNewEvent />
			</FormProvider>
		</Modal>
	)
}

export default ModalNewEvent
