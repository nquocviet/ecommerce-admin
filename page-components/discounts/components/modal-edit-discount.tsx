import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import {
	Modal,
	ModalOpenedProps,
	NumberInput,
	Select,
	Textarea,
	TextInput,
} from '@/components'

const ModalEditDiscount = (props: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal
			title="Edit general information"
			size="xl"
			confirmText="Save"
			{...props}
		>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Select
						name="region"
						control={control}
						data={[
							{ label: 'EU', value: 'eu' },
							{ label: 'NA', value: 'na' },
						]}
						label="Choose valid regions"
						placeholder="Select region..."
						required
					/>
					<Grid>
						<Grid.Col span={6}>
							<TextInput
								name="code"
								control={control}
								label="Code"
								placeholder="SUMMERSALE10"
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<NumberInput
								name="percentage"
								control={control}
								label="Percentage"
								placeholder="10"
								textIcon="%"
								required
							/>
						</Grid.Col>
					</Grid>
					<Text className="text-xs text-gray-600">
						The code your customers will enter during checkout. This will appear
						on your customer&apos;s invoice. <br />
						Uppercase letters and numbers only.
					</Text>
					<Textarea
						name="description"
						control={control}
						label="Description"
						placeholder="Summer sale"
						minRows={4}
						required
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditDiscount
