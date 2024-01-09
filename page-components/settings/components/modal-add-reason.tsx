import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid } from '@mantine/core'

import { Modal, ModalOpenedProps, Textarea, TextInput } from '@/components'

const ModalAddReason = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal title="Add reason" size="xl" confirmText="Create" {...props}>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Grid>
						<Grid.Col span={6}>
							<TextInput
								name="value"
								control={control}
								label="Value"
								placeholder="wrong_size"
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="label"
								control={control}
								label="Label"
								placeholder="Wrong size"
								required
							/>
						</Grid.Col>
					</Grid>
					<Textarea
						name="description"
						control={control}
						label="Description"
						placeholder="Customer received the wrong size"
						minRows={4}
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalAddReason
