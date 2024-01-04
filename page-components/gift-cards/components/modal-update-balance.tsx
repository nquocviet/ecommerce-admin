import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Grid } from '@mantine/core'

import { Modal, ModalOpenedProps, NumberInput, TextInput } from '@/components'
import { useGiftCardDetails } from '@/lib/gift-card'

const ModalUpdateBalance = (props: ModalOpenedProps) => {
	const { control, reset } = useForm()
	const { data } = useGiftCardDetails()

	useEffect(() => {
		if (!data) return

		reset({
			currency: data.region.currency_code.toUpperCase(),
			value: data.value / 100,
		})
	}, [data, reset])

	return (
		<Modal {...props} title="Update balance" size="lg" confirmText="Save">
			<form>
				<Grid>
					<Grid.Col span={3}>
						<TextInput
							name="currency"
							control={control}
							label="Currency"
							readOnly
						/>
					</Grid.Col>
					<Grid.Col span={9}>
						<NumberInput
							name="value"
							control={control}
							label="Price"
							textIcon="$"
						/>
					</Grid.Col>
				</Grid>
			</form>
		</Modal>
	)
}

export default ModalUpdateBalance
