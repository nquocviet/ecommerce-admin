import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Flex, Text } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { Modal, NumberInput, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const NewTaxRateModal = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal title="Add tax rate" size="lg" confirmText="Create" {...props}>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Text className="text-sm font-semibold text-black">Details</Text>
					<TextInput
						name="name"
						control={control}
						label="Name"
						placeholder="Rate name"
						required
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
					<Box>
						<Text className="mb-3 text-sm font-semibold text-black">
							Overrides
						</Text>
						<Button
							size="sm"
							color="gray"
							variant="outline"
							leftIcon={<Plus size={20} />}
							fullWidth
						>
							Add overrides
						</Button>
					</Box>
				</Flex>
			</form>
		</Modal>
	)
}

export default NewTaxRateModal
