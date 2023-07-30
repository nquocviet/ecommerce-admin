import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Text } from '@mantine/core'

import {
	DatePickerInput,
	DropzoneImage,
	Modal,
	ModalOpenedProps,
	MultiSelect,
	Textarea,
	TextInput,
} from '@/components'
import {
	CURRENT_DATE,
	KANBAN_PIC_OPTIONS,
	KANBAN_TAG_OPTIONS,
} from '@/constants/common'
import { KanbanEntity } from '@/types/kanban'

interface ModalAddEditTaskProps extends ModalOpenedProps {
	onSubmit: (data) => void
}

const defaultValues: KanbanEntity = {
	title: '',
	description: '',
	due_date: new Date(),
	tags: [],
	attachment: '',
	pics: [],
}

const ModalAddEditTask = ({
	opened,
	onClose,
	onSubmit,
}: ModalAddEditTaskProps) => {
	const { control, reset, handleSubmit } = useForm({ defaultValues })

	useEffect(() => {
		if (!opened) reset(defaultValues)
	}, [opened, reset])

	return (
		<Modal
			title="Add new task"
			size="xl"
			opened={opened}
			onClose={onClose}
			onConfirm={handleSubmit(onSubmit)}
		>
			<Grid gutter={16}>
				<Grid.Col>
					<TextInput
						name="title"
						control={control}
						label="Task name"
						placeholder="Redesign dashboard page..."
						required
					/>
				</Grid.Col>
				<Grid.Col xs={6}>
					<MultiSelect
						name="tags"
						control={control}
						data={KANBAN_TAG_OPTIONS}
						label="Tags (max 3 items)"
						placeholder="UI/UX design..."
						maxSelectedValues={3}
						clearable
						searchable
						required
					/>
				</Grid.Col>
				<Grid.Col xs={6}>
					<DatePickerInput
						name="due_date"
						control={control}
						label="Due date"
						placeholder="DD/MM/YYYY"
						minDate={CURRENT_DATE}
						required
					/>
				</Grid.Col>
				<Grid.Col>
					<MultiSelect
						name="pics"
						control={control}
						data={KANBAN_PIC_OPTIONS}
						label="PICs"
						placeholder="Lebron..."
						maxSelectedValues={3}
						clearable
						searchable
						required
					/>
				</Grid.Col>
				<Grid.Col>
					<Textarea
						name="description"
						control={control}
						label="Description"
						placeholder="Chart color needs to changed to primary color..."
						minRows={5}
					/>
				</Grid.Col>
				<Grid.Col>
					<Text className="mb-1.5 text-sm font-medium">Attachment</Text>
					<DropzoneImage
						onDrop={(file) => console.log('accepted file', file)}
						multiple={false}
					/>
				</Grid.Col>
			</Grid>
		</Modal>
	)
}

export default ModalAddEditTask
