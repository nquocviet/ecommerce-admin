import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Text } from '@mantine/core'
import { LockSimple } from '@phosphor-icons/react'

import { Modal, NumberInput, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const defaultValues = {
	name: 'Default',
	'tax-rate': '',
	'tax-code': '',
}

const EditTaxRateModal = ({ opened, onClose }: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal
			title="Edit tax rate"
			size="lg"
			opened={opened}
			onClose={onClose}
			confirmText="Save"
		>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Text className="text-sm font-semibold text-black">Details</Text>
					<TextInput
						name="name"
						control={control}
						label="Name"
						icon={<LockSimple size={14} className="text-gray-400" />}
						required
						readOnly
					/>
					<NumberInput
						name="tax-rate"
						control={control}
						label="Tax rate"
						placeholder="12"
						textIcon="%"
						required
					/>
					<TextInput
						name="tax-code"
						control={control}
						label="Tax code"
						placeholder="1000"
						required
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default EditTaxRateModal
