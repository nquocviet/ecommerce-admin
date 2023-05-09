import React from 'react'
import { useForm } from 'react-hook-form'

import { Modal, Select } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const defaultValues = {
	region: 'na',
}

const EditGiftCardDetailsModal = (props: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal
			{...props}
			title="Edit gift card details"
			size="lg"
			confirmText="Save"
		>
			<form className="relative z-[1001]">
				<Select
					name="region"
					control={control}
					data={[
						{ label: 'EU', value: 'eu' },
						{ label: 'NA', value: 'na' },
					]}
					label="Region"
				/>
			</form>
		</Modal>
	)
}

export default EditGiftCardDetailsModal
