import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid } from '@mantine/core'

import {
	DatePickerInput,
	Modal,
	ModalOpenedProps,
	NumberInput,
	SwitchGroup,
	TimePickerInput,
} from '@/components'

const defaultValues = {
	has_start_date: true,
	start_date: new Date(),
	start_time: undefined,
	has_expiry_date: false,
	limit_redemptions: true,
	number_redemptions: 10,
}

const ModalEditConfigurations = (props: ModalOpenedProps) => {
	const { control } = useForm({ defaultValues })

	return (
		<Modal title="Edit configurations" size="xl" confirmText="Save" {...props}>
			<form>
				<Flex direction="column" align="stretch" gap={24}>
					<SwitchGroup
						name="has_start_date"
						control={control}
						title="Discount has a start date?"
						description="Schedule the discount to activate in the future."
					/>
					<Grid>
						<Grid.Col xs={6}>
							<DatePickerInput
								name="start_date"
								control={control}
								label="Start date"
							/>
						</Grid.Col>
						<Grid.Col xs={6}>
							<TimePickerInput
								name="start_time"
								control={control}
								label="Start time"
							/>
						</Grid.Col>
					</Grid>
					<SwitchGroup
						name="has_expiry_date"
						control={control}
						title="Discount has an expiry date?"
						description="Schedule the discount to deactivate in the future."
					/>
					<SwitchGroup
						name="limit_redemptions"
						control={control}
						title="Limit the number of redemptions?"
						description="Limit applies across all customers, not per customer."
					/>
					<NumberInput
						name="number_redemptions"
						control={control}
						label="Number of redemptions"
						placeholder="10"
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditConfigurations
