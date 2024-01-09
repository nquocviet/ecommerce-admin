import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Grid, Text } from '@mantine/core'

import {
	Modal,
	ModalOpenedProps,
	NumberInput,
	Select,
	TextInput,
} from '@/components'
import { useCountries } from '@/lib/country'

const ModalEditAttributes = (props: ModalOpenedProps) => {
	const { control } = useForm()
	const { data = [] } = useCountries()
	const countries = data?.map(({ numeric: value, name: label }) => ({
		value,
		label,
	}))

	return (
		<Modal title="Edit media" size="xl" confirmText="Save" {...props}>
			<form>
				<Flex direction="column" align="stretch" gap={24}>
					<div>
						<Text className="mb-1 font-semibold text-black">Dimensions</Text>
						<Text className="mb-5 text-sm text-gray-500">
							Configure to calculate the most accurate shipping rates.
						</Text>
						<Grid>
							<Grid.Col span={6} xs={3}>
								<NumberInput
									name="width"
									control={control}
									label="Width"
									placeholder="100..."
								/>
							</Grid.Col>
							<Grid.Col span={6} xs={3}>
								<NumberInput
									name="length"
									control={control}
									label="Length"
									placeholder="100..."
								/>
							</Grid.Col>
							<Grid.Col span={6} xs={3}>
								<NumberInput
									name="height"
									control={control}
									label="Height"
									placeholder="100..."
								/>
							</Grid.Col>
							<Grid.Col span={6} xs={3}>
								<NumberInput
									name="weight"
									control={control}
									label="Weight"
									placeholder="100..."
								/>
							</Grid.Col>
						</Grid>
					</div>
					<div>
						<Text className="mb-1 font-semibold text-black">Customs</Text>
						<Text className="mb-5 text-sm text-gray-500">
							Configure to calculate the most accurate shipping rates.
						</Text>
						<Grid>
							<Grid.Col xs={6}>
								<TextInput
									name="mid-code"
									control={control}
									label="MID code"
									placeholder="XDSKLAD9999..."
								/>
							</Grid.Col>
							<Grid.Col xs={6}>
								<TextInput
									name="hs-code"
									control={control}
									label="HS code"
									placeholder="BDJSK39277W..."
								/>
							</Grid.Col>
							<Grid.Col xs={6}>
								<Select
									name="country"
									control={control}
									label="Country of origin"
									placeholder="Choose a country"
									data={countries}
								/>
							</Grid.Col>
						</Grid>
					</div>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditAttributes
