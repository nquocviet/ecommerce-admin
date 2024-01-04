import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Grid, Text } from '@mantine/core'
import { Plus, Trash } from '@phosphor-icons/react'

import { Modal, ModalOpenedProps, TextInput } from '@/components'

type DefaultValue = {
	title: string
	metadata: Array<{
		key: string
		value: string
	}>
}

type ModalAddEditCustomerGroupProps = ModalOpenedProps & {
	defaultValues?: DefaultValue
}

const formDefaultValues = {
	title: '',
	metadata: [],
}

const ModalAddEditCustomerGroup = (props: ModalAddEditCustomerGroupProps) => {
	const { control } = useForm({
		defaultValues: props.defaultValues || formDefaultValues,
	})
	const {
		fields: metadata,
		append,
		remove,
	} = useFieldArray({
		control,
		name: 'metadata',
	})

	return (
		<Modal
			title={
				props.defaultValues
					? 'Edit customer group'
					: 'Create a new customer group'
			}
			size="xl"
			confirmText={props.defaultValues ? 'Edit group' : 'Publish group'}
			{...props}
		>
			<form>
				<Text className="mb-3 text-sm font-semibold">Details</Text>
				<TextInput
					name="title"
					control={control}
					label="Title"
					placeholder="Customer group name"
					required
				/>
				<Text className="mt-6 mb-3 text-sm font-semibold">Metadata</Text>
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={16}>
						{metadata.map((field, index) => (
							<Grid key={field.id}>
								<Grid.Col span={4}>
									<TextInput
										control={control}
										name={`metadata.${index}.key`}
										label="Key"
										placeholder="Some key"
									/>
								</Grid.Col>
								<Grid.Col span={8}>
									<Flex align="flex-end" gap={12}>
										<TextInput
											control={control}
											name={`metadata.${index}.value`}
											label="Value"
											placeholder="Some value"
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
							onClick={() => append({ key: '', value: '' })}
						>
							Add metadata
						</Button>
					</Flex>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalAddEditCustomerGroup
