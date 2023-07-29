import React, { useState } from 'react'
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

interface ModalAddTaskProps extends ModalOpenedProps {
	onSubmit: () => void
}

const ModalAddTask = ({ opened, onClose, onSubmit }: ModalAddTaskProps) => {
	const [tags, setTags] = useState([])
	const { control, handleSubmit } = useForm()

	return (
		<Modal title="Add new task" size="xl" opened={opened} onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
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
							data={tags}
							label="Tags"
							placeholder="UI/UX design..."
							searchable
							creatable
							required
						/>
					</Grid.Col>
					<Grid.Col xs={6}>
						<DatePickerInput
							name="due_date"
							control={control}
							label="Due date"
							placeholder="DD/MM/YYYY"
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
						<label>
							<Text className="mb-1.5 text-sm font-medium">Attachments</Text>
							<DropzoneImage onDrop={() => null} />
						</label>
					</Grid.Col>
				</Grid>
			</form>
		</Modal>
	)
}

export default ModalAddTask
