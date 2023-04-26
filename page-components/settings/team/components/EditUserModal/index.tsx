import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid } from '@mantine/core'

import { Modal, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const defaultValues = {
	firstName: '',
	lastName: '',
	email: 'admin@hercules.com',
}

const EditUserModal = ({ opened, onClose }: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal
			title="Edit user"
			size="lg"
			confirmText="Save"
			opened={opened}
			onClose={onClose}
		>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Grid>
						<Grid.Col span={6}>
							<TextInput
								name="firstName"
								control={control}
								label="First name"
								placeholder="First name..."
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="lastName"
								control={control}
								label="Last name"
								placeholder="Last name..."
								required
							/>
						</Grid.Col>
					</Grid>
					<TextInput
						name="email"
						control={control}
						label="Email"
						type="email"
						readOnly
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default EditUserModal
