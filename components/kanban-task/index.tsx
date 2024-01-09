import React, { Dispatch, SetStateAction } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import {
	ActionIcon,
	AspectRatio,
	Avatar,
	Badge,
	Flex,
	Image,
	MANTINE_COLORS,
	Paper,
	Text,
	Tooltip,
} from '@mantine/core'
import { Clock, Fire, NotePencil } from '@phosphor-icons/react'

import { KANBAN_TAG_OPTIONS, SYSTEM_USERS } from '@/constants/common'
import { AddEditTaskModalType } from '@/page-components/kanban'
import { KanbanEntity } from '@/types/kanban'
import { formatDate } from '@/utils'

interface KanbanTaskProps extends KanbanEntity {
	index: number
	groupId: string
	className?: string
	setAddEditTaskModal: Dispatch<SetStateAction<AddEditTaskModalType>>
}

const MAX_USER_NUMBER = 3
const KANBAN_TAGS = KANBAN_TAG_OPTIONS.map((option) => ({
	...option,
	color: MANTINE_COLORS[Math.floor(Math.random() * MANTINE_COLORS.length)],
}))

const KanbanTask = ({
	id,
	index,
	title,
	description,
	due_date,
	tags,
	attachment,
	pics,
	groupId,
	setAddEditTaskModal,
}: KanbanTaskProps) => {
	const outdated = new Date() > due_date
	const Icon = outdated ? Fire : Clock

	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<Paper
					shadow="sm"
					p="md"
					className="border border-solid border-gray-300"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<Flex justify="space-between" gap={8}>
						<Text className="text-lg font-semibold">{title}</Text>
						<ActionIcon
							className="-mr-1"
							onClick={() =>
								setAddEditTaskModal({
									opened: true,
									kanban: {
										id,
										title,
										description,
										pics,
										due_date,
										tags,
										attachment,
									},
									groupId,
								})
							}
						>
							<NotePencil size={20} />
						</ActionIcon>
					</Flex>
					<Flex wrap="wrap" gap={6} className="mt-3">
						{tags.map((tag) => {
							const kanbanTag = KANBAN_TAGS.find(({ value }) => value === tag)

							return (
								<Badge key={tag} color={kanbanTag?.color} variant="outline">
									{kanbanTag?.label}
								</Badge>
							)
						})}
					</Flex>
					{attachment && (
						<AspectRatio
							ratio={16 / 9}
							className="mt-4 overflow-hidden rounded-lg"
						>
							<Image src={attachment} alt="" />
						</AspectRatio>
					)}
					{description && (
						<Text className="mt-4 whitespace-pre-line">{description}</Text>
					)}
					<Flex justify="space-between" align="center" className="mt-4">
						<Avatar.Group spacing="xs">
							{pics.slice(0, MAX_USER_NUMBER).map((id) => {
								const user = SYSTEM_USERS.find((user) => user.id === id)
								return (
									<Tooltip key={id} label={user?.name}>
										<Avatar src={user?.avatar} alt="" size={32} radius="xl" />
									</Tooltip>
								)
							})}
							{pics.length > MAX_USER_NUMBER && (
								<Avatar size={32} radius="xl">
									+{pics.length - MAX_USER_NUMBER}
								</Avatar>
							)}
						</Avatar.Group>
						<Badge
							color={outdated ? 'red' : 'primary'}
							className="!h-auto py-1"
						>
							<Icon size={20} className="-mb-1.5 mr-1.5" />
							{formatDate(due_date)}
						</Badge>
					</Flex>
				</Paper>
			)}
		</Draggable>
	)
}

export default KanbanTask
