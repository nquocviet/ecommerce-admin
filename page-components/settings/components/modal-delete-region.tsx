import React from 'react'
import { useForm } from 'react-hook-form'
import { Text } from '@mantine/core'

import { Modal, ModalOpenedProps, TextInput } from '@/components'

const ModalDeleteRegion = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal
			title="Delete region"
			size="lg"
			confirmText="Yes, confirm"
			withClose={false}
			{...props}
		>
			<div className="text-sm text-gray-500">
				<Text className="mb-6">
					Are you sure you want to delete this region?
				</Text>
				<Text className="mb-4">
					Type the name <span className="font-semibold">&quot;EU&quot;</span> to
					confirm.
				</Text>
				<form>
					<TextInput name="region" control={control} placeholder="EU" />
				</form>
			</div>
		</Modal>
	)
}

export default ModalDeleteRegion
