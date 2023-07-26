import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Grid, Text, Tooltip } from '@mantine/core'
import { Info, Plus, Trash } from '@phosphor-icons/react'

import { Modal, NumberInput, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

const ModalAddDenomination = (props: ModalOpenedProps) => {
	const { control } = useForm()
	const {
		fields: prices,
		append,
		remove,
	} = useFieldArray({
		control,
		name: 'prices',
	})

	return (
		<Modal {...props} title="Add denomination" size="xl" confirmText="Save">
			<form>
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={16}>
						<Flex align="center" gap={6}>
							<Text className="font-semibold text-black">Default value</Text>
							<Tooltip
								width={240}
								label="This is the denomination in your store's default currency"
								position="bottom"
								multiline
							>
								<Info size={16} />
							</Tooltip>
						</Flex>
						<Grid>
							<Grid.Col span={3}>
								<TextInput
									name="currency"
									control={control}
									label="Currency"
									placeholder="USD"
								/>
							</Grid.Col>
							<Grid.Col span={9}>
								<NumberInput
									name="amount"
									control={control}
									label="Amount"
									placeholder="0.00"
									textIcon="$"
								/>
							</Grid.Col>
						</Grid>
					</Flex>
					<Flex direction="column" align="stretch" gap={16}>
						<Flex align="center" gap={6}>
							<Text className="font-semibold text-black">Other values</Text>
							<Tooltip
								width={240}
								label="Here you can add values in other currencies"
								multiline
							>
								<Info size={16} />
							</Tooltip>
						</Flex>
						{prices.map((field, index) => (
							<Grid key={field.id}>
								<Grid.Col span={3}>
									<TextInput
										control={control}
										name={`price.${index}.currency`}
										label="Currency"
										placeholder="USD"
									/>
								</Grid.Col>
								<Grid.Col span={9}>
									<Flex align="flex-end" gap={12}>
										<NumberInput
											control={control}
											name={`price.${index}.amount`}
											label="Amount"
											placeholder="0.00"
											textIcon="$"
											className="grow"
										/>
										<ActionIcon
											color="gray"
											variant="outline"
											size="lg"
											onClick={() => remove(index)}
										>
											<Trash size={20} />
										</ActionIcon>
									</Flex>
								</Grid.Col>
							</Grid>
						))}
						<Button
							color="gray"
							variant="outline"
							leftIcon={<Plus size={16} />}
							onClick={append}
							disabled={prices.length >= 1}
							fullWidth
						>
							Add a price
						</Button>
					</Flex>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalAddDenomination
