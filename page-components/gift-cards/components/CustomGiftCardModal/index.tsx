import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import { Modal, NumberInput, Select, Textarea, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const defaultValues = {
	region: 'eu',
	currency: 'EUR',
	amount: '',
	receiver_email: '',
	personal_message: '',
}

const CustomGiftCardModal = (props: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal
			{...props}
			title="Custom gift card"
			size="xl"
			confirmText="Create & Send"
		>
			<form>
				<Flex direction="column" align="stretch" gap={32}>
					<Flex direction="column" align="stretch" gap={16}>
						<Text className="font-semibold">Value</Text>
						<Grid>
							<Grid.Col span={5}>
								<Select
									name="region"
									control={control}
									data={[
										{ label: 'EU', value: 'eu' },
										{ label: 'NA', value: 'na' },
									]}
									label="Region"
								/>
							</Grid.Col>
							<Grid.Col span={2}>
								<TextInput
									name="currency"
									control={control}
									label="Currency"
									readOnly
								/>
							</Grid.Col>
							<Grid.Col span={5}>
								<NumberInput
									name="amount"
									control={control}
									label="Amount"
									placeholder="0.00"
									textIcon="$"
									required
								/>
							</Grid.Col>
						</Grid>
					</Flex>
					<Flex direction="column" align="stretch" gap={16}>
						<Text className="font-semibold">Receiver</Text>
						<TextInput
							name="receiver_email"
							control={control}
							label="Email"
							placeholder="lebron@james.com"
							required
						/>
						<Textarea
							name="personal_message"
							control={control}
							label="Personal message"
							placeholder="Something nice to someone special"
							minRows={7}
						/>
					</Flex>
				</Flex>
			</form>
		</Modal>
	)
}

export default CustomGiftCardModal
