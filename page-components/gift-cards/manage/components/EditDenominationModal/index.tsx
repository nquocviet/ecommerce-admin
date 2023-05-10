import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Grid, Text, Tooltip } from '@mantine/core'
import { Info, Plus, Trash } from '@phosphor-icons/react'

import { Modal, NumberInput, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { useProductGiftCard } from '@/lib/product'

const EditDenominationModal = (props: ModalOpenedProps) => {
	const { control, reset } = useForm()
	const {
		fields: prices,
		append,
		remove,
	} = useFieldArray({
		control,
		name: 'prices',
	})
	const { data } = useProductGiftCard()

	useEffect(() => {
		if (!data) return

		reset({
			prices: data.variants[0].prices,
		})
	}, [data, reset])

	return (
		<Modal {...props} title="Edit denomination" size="xl" confirmText="Save">
			<form>
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={16}>
						<Flex align="center" gap={6}>
							<Text className="font-semibold text-black">Prices</Text>
							<Tooltip label="Helpful denominations" position="bottom">
								<Info size={16} />
							</Tooltip>
						</Flex>
						{prices.map((field, index) => (
							<Grid key={field.id}>
								<Grid.Col span={3}>
									<TextInput
										control={control}
										name={`prices.${index}.currency_code`}
										label="Currency"
										placeholder="USD"
									/>
								</Grid.Col>
								<Grid.Col span={9}>
									<Flex align="flex-end" gap={12}>
										<NumberInput
											control={control}
											name={`prices.${index}.amount`}
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
							disabled={prices.length >= 2}
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

export default EditDenominationModal
