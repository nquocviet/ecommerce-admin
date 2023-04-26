import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid } from '@mantine/core'

import { Modal, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const EditInformationModal = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal
			title="Edit information"
			size="lg"
			confirmText="Submit and close"
			{...props}
		>
			<form>
				<Grid>
					<Grid.Col span={6}>
						<TextInput
							name="first_name"
							control={control}
							label="First name"
							placeholder="First name..."
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							name="last_name"
							control={control}
							label="Last name"
							placeholder="Last name..."
						/>
					</Grid.Col>
				</Grid>
			</form>
		</Modal>
	)
}

export default EditInformationModal
