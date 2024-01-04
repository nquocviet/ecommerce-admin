import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Text } from '@mantine/core'
import { LockSimple } from '@phosphor-icons/react'

import { Modal, ModalOpenedProps, NumberInput, TextInput } from '@/components'

const defaultValues = {
	name: 'Default',
	tax_rate: '',
	tax_code: '',
}

const ModalEditTaxRate = (props: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal title="Edit tax rate" size="lg" confirmText="Save" {...props}>
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
						name="tax_rate"
						control={control}
						label="Tax rate"
						placeholder="12"
						textIcon="%"
						required
					/>
					<TextInput
						name="tax_code"
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

export default ModalEditTaxRate
