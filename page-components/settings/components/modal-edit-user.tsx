import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid } from '@mantine/core'

import { Modal, ModalOpenedProps, TextInput } from '@/components'
import { STORE_NAME } from '@/constants/common'

const defaultValues = {
	first_name: '',
	last_name: '',
	email: `admin@${STORE_NAME.toLowerCase()}.com`,
}

const ModalEditUser = (props: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal title="Edit user" size="lg" confirmText="Save" {...props}>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Grid>
						<Grid.Col span={6}>
							<TextInput
								name="first_name"
								control={control}
								label="First name"
								placeholder="First name..."
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="last_name"
								control={control}
								label="Last name"
								placeholder="Last name..."
								required
							/>
						</Grid.Col>
					</Grid>
					<TextInput
						type="email"
						name="email"
						control={control}
						label="Email"
						placeholder={`example@${STORE_NAME.toLowerCase()}.com`}
						readOnly
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditUser
