import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Button, Flex, Text } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { KanbanTask } from '@/components'
import { AddEditTaskModalType } from '@/page-components/kanban'
import { KanbanEntity } from '@/types/kanban'

interface KanbanGroupProps {
	id: string
	title: string
	tasks: KanbanEntity[]
	setAddEditTaskModal: Dispatch<SetStateAction<AddEditTaskModalType>>
}

const KanbanGroup = ({
	id,
	title,
	tasks,
	setAddEditTaskModal,
}: KanbanGroupProps) => {
	const [enabled, setEnabled] = useState(false)

	useEffect(() => {
		const animation = requestAnimationFrame(() => setEnabled(true))
		return () => {
			cancelAnimationFrame(animation)
			setEnabled(false)
		}
	}, [])

	if (!enabled) {
		return null
	}

	return (
		<Flex
			direction="column"
			align="stretch"
			className="min-w-[280px] flex-1"
			gap={20}
		>
			<Flex justify="space-between" align="center">
				<h2 className="my-0 text-lg font-semibold">
					{title} ({tasks.length > 100 ? '99+' : tasks.length})
				</h2>
				<Button
					color="gray"
					variant="outline"
					size="xs"
					className="bg-white"
					leftIcon={<Plus weight="bold" size={16} />}
					onClick={() =>
						setAddEditTaskModal({
							opened: true,
							kanban: null,
							groupId: id,
						})
					}
				>
					New task
				</Button>
			</Flex>
			<Droppable droppableId={id}>
				{(provided) => (
					<Flex
						direction="column"
						align="stretch"
						className="h-full"
						gap={20}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{tasks.length ? (
							tasks.map((task, index) => (
								<KanbanTask
									key={task.id}
									index={index}
									groupId={id}
									setAddEditTaskModal={setAddEditTaskModal}
									{...task}
								/>
							))
						) : (
							<Text className="text-center font-medium">
								There is no tasks yet
							</Text>
						)}
						{provided.placeholder}
					</Flex>
				)}
			</Droppable>
		</Flex>
	)
}

export default KanbanGroup
