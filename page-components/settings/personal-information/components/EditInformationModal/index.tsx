import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Grid } from '@mantine/core'

import { Modal, ModalAction, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const EditInformationModal = ({ opened, onClose }: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal
			size="lg"
			title="Edit information"
			opened={opened}
			onClose={onClose}
			action={
				<ModalAction>
					<Button size="sm" color="gray" variant="outline">
						Cancel
					</Button>
					<Button size="sm">Submit and close</Button>
				</ModalAction>
			}
			centered
		>
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
		</Modal>
	)
}

export default EditInformationModal
