import React from 'react'
import { useForm } from 'react-hook-form'

import { Modal, ModalOpenedProps, TextInput } from '@/components'
import { STORE_NAME } from '@/constants/common'

const ModalEditEmail = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal title="Edit email address" size="lg" confirmText="Save" {...props}>
			<form>
				<TextInput
					type="email"
					name="email"
					control={control}
					label="Email"
					placeholder={`example@${STORE_NAME.toLowerCase()}.com`}
				/>
			</form>
		</Modal>
	)
}

export default ModalEditEmail
