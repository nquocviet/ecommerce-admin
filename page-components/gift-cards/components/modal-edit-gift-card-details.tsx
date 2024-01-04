import React from 'react'
import { useForm } from 'react-hook-form'

import { Modal, ModalOpenedProps, Select } from '@/components'

const defaultValues = {
	region: 'na',
}

const ModalEditGiftCardDetails = (props: ModalOpenedProps) => {
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

export default ModalEditGiftCardDetails
