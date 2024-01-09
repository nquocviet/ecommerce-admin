import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AspectRatio, Grid, Image, Text } from '@mantine/core'
import { array, date, object, string } from 'yup'

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
	KANBAN_TAG_OPTIONS,
	SYSTEM_USER_OPTIONS,
} from '@/constants/common'
import { MAX_LENGTH_255 } from '@/constants/validation'
import { KanbanEntity } from '@/types/kanban'

interface ModalAddEditTaskProps extends ModalOpenedProps {
	defaultValues: KanbanEntity | null
	onSubmit: (data: KanbanEntity) => void
}

const defaultValues: KanbanEntity = {
	title: '',
	description: '',
	due_date: new Date(),
	tags: [],
	attachment: '',
	pics: [],
}

const schema = object({
	title: string()
		.max(
			MAX_LENGTH_255,
			`Title must be shorter than or equal to ${MAX_LENGTH_255} characters`
		)
		.required('Title should not be empty'),
	description: string().nullable(),
	due_date: date().required('Due date should not be empty'),
	tags: array()
		.max(3, 'Please select a maximum of three tags from the list')
		.min(1, 'Tags should not be empty')
		.required(),
	attachment: string().nullable(),
	pics: array().min(1, 'PICs should not be empty').required(),
})

const ModalAddEditTask = ({
	opened,
	onSubmit,
	onClose,
	...props
}: ModalAddEditTaskProps) => {
	const { control, reset, watch, handleSubmit } = useForm({
		defaultValues,
		resolver: yupResolver(schema),
	})
	const attachment = watch('attachment')

	useEffect(() => {
		if (props.defaultValues) reset(props.defaultValues)
	}, [props.defaultValues, reset])

	useEffect(() => {
		if (!opened) reset(defaultValues)
	}, [opened, reset])

	return (
		<Modal
			title={props.defaultValues ? 'Edit task' : 'Add new task'}
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
						data={SYSTEM_USER_OPTIONS}
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
					<Grid gutter={20} className="mt-4">
						<Grid.Col span={4}>
							{attachment && (
								<AspectRatio ratio={16 / 9}>
									<Image src={attachment} alt="" />
								</AspectRatio>
							)}
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
		</Modal>
	)
}

export default ModalAddEditTask
