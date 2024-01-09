import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Text } from '@mantine/core'
import { Plus, Trash } from '@phosphor-icons/react'

import { Modal, ModalOpenedProps, TextInput } from '@/components'

const defaultValues = {
	options: [{ variations: 'Size' }, { variations: 'Color' }],
}

const ModalEditOptions = (props: ModalOpenedProps) => {
	const { control } = useForm({ defaultValues })
	const {
		fields: options,
		append,
		remove,
	} = useFieldArray({
		control,
		name: 'options',
	})

	return (
		<Modal title="Edit options" size="xl" confirmText="Save" {...props}>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<Text className="font-semibold">Product options</Text>
					{options.map((field, index) => (
						<Flex key={field.id} align="flex-end" gap={12}>
							<TextInput
								control={control}
								name={`options.${index}.variations`}
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
					))}
					<Button
						color="gray"
						variant="outline"
						leftIcon={<Plus size={16} />}
						onClick={() => append({ variations: '' })}
					>
						Add an option
					</Button>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditOptions
