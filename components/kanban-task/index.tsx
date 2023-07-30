import React from 'react'
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
import { Clock, NotePencil } from '@phosphor-icons/react'

import { KANBAN_TAG_OPTIONS, KANBAN_USERS } from '@/constants/common'
import { KanbanEntity } from '@/types/kanban'
import { formatDate } from '@/utils'

interface KanbanTaskProps extends KanbanEntity {
	className?: string
}

const MAX_USER_NUMBER = 3
const KANBAN_TAGS = KANBAN_TAG_OPTIONS.map((option) => ({
	...option,
	color: MANTINE_COLORS[Math.floor(Math.random() * MANTINE_COLORS.length)],
}))

const KanbanTask = ({
	title,
	description,
	due_date,
	tags,
	attachment,
	pics,
}: KanbanTaskProps) => {
	return (
		<Paper shadow="sm" p="md" className="border border-solid border-gray-300">
			<Flex justify="space-between" gap={8}>
				<Text className="text-lg font-semibold">{title}</Text>
				<ActionIcon className="-mr-1">
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
				<AspectRatio ratio={16 / 9} className="mt-4 overflow-hidden rounded-lg">
					<Image src={attachment} alt="" />
				</AspectRatio>
			)}
			{description && (
				<Text className="mt-4 whitespace-pre-line">{description}</Text>
			)}
			<Flex justify="space-between" align="center" className="mt-4">
				<Avatar.Group spacing="xs">
					{pics.slice(0, MAX_USER_NUMBER).map((id) => {
						const user = KANBAN_USERS.find((user) => user.id === id)
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
					color={new Date() > due_date ? 'red' : 'primary'}
					className="!h-auto py-1"
				>
					<Clock size={20} className="-mb-1.5 mr-1.5" />
					{formatDate(due_date)}
				</Badge>
			</Flex>
		</Paper>
	)
}

export default KanbanTask
