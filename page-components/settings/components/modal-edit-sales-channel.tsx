import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Text } from '@mantine/core'

import { Modal, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/modal'
import { STORE_NAME } from '@/constants/common'

const defaultValues = {
	title: 'Default Sales Channel',
	description: `Created by ${STORE_NAME}`,
}

const ModalEditSalesChannel = (props: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal
			title="Sales channel details"
			size="xl"
			confirmText="Save"
			{...props}
		>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Text className="text-sm font-semibold">General information</Text>
					<TextInput
						name="title"
						control={control}
						label="Title"
						placeholder="Website, app, Amazon, physical store POS, facebook product feed..."
						required
					/>
					<TextInput
						name="description"
						control={control}
						label="Description"
						placeholder="Available products at our website, app..."
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditSalesChannel
