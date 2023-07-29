import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import { Modal, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/modal'
import { useCustomerDetails } from '@/lib/customer'

const ModalEditCustomer = (props: ModalOpenedProps) => {
	const { data } = useCustomerDetails()
	const { control, reset } = useForm()

	useEffect(() => {
		if (!data) return

		const { first_name, last_name, email, phone } = data
		reset({
			first_name,
			last_name,
			email,
			phone,
		})
	}, [data, reset])

	return (
		<Modal {...props} title="Customer details" size="xl" confirmText="Save">
			<form>
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={12}>
						<Text className="text-sm font-semibold">General</Text>
						<Grid>
							<Grid.Col xs={6}>
								<TextInput
									name="first_name"
									control={control}
									label="First name"
									placeholder="Lebron"
								/>
							</Grid.Col>
							<Grid.Col xs={6}>
								<TextInput
									name="last_name"
									control={control}
									label="Last name"
									placeholder="James"
								/>
							</Grid.Col>
						</Grid>
					</Flex>
					<Flex direction="column" align="stretch" gap={12}>
						<Text className="text-sm font-semibold">Contact</Text>
						<Grid>
							<Grid.Col xs={6}>
								<TextInput
									name="email"
									control={control}
									label="Email"
									placeholder="example@domain.com"
								/>
							</Grid.Col>
							<Grid.Col xs={6}>
								<TextInput
									name="phone"
									control={control}
									label="Phone number"
									placeholder="+43 41 45 42 42"
								/>
							</Grid.Col>
						</Grid>
					</Flex>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditCustomer
