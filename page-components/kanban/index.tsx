import React, { useCallback, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import {
	KanbanGroup,
	ModalAddEditTask,
} from '@/page-components/kanban/components'
import { generateKanbanTask } from '@/utils'

const defaultGroups = {
	'1': {
		title: 'To do',
		tasks: generateKanbanTask(4),
	},
	'2': {
		title: 'In progress',
		tasks: generateKanbanTask(2),
	},
	'3': {
		title: 'Resolved',
		tasks: generateKanbanTask(3),
	},
	'4': {
		title: 'Closed',
		tasks: generateKanbanTask(1),
	},
}

const Kanban = () => {
	const [groups, setGroups] = useState(defaultGroups)
	const [addTaskOpened, { open, close }] = useDisclosure(false)

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	const onDragEnd = useCallback((result, groups, setGroups) => {
		if (!result.destination) return
		const { source, destination } = result
		if (source.droppableId !== destination.droppableId) {
			const sourceGroup = groups[source.droppableId]
			const destGroup = groups[destination.droppableId]
			const sourceTasks = [...sourceGroup.tasks]
			const destTasks = [...destGroup.tasks]
			const [removed] = sourceTasks.splice(source.index, 1)
			destTasks.splice(destination.index, 0, removed)
			setGroups({
				...groups,
				[source.droppableId]: {
					...sourceGroup,
					tasks: sourceTasks,
				},
				[destination.droppableId]: {
					...destGroup,
					tasks: destTasks,
				},
			})
		} else {
			const group = groups[source.droppableId]
			const copiedTasks = [...group.tasks]
			const [removed] = copiedTasks.splice(source.index, 1)
			copiedTasks.splice(destination.index, 0, removed)
			setGroups({
				...groups,
				[source.droppableId]: {
					...group,
					tasks: copiedTasks,
				},
			})
		}
	}, [])

	return (
		<DragDropContext
			onDragEnd={(result) => onDragEnd(result, groups, setGroups)}
		>
			<Flex gap={20} className="grow overflow-auto">
				{Object.entries(groups).map(([groupId, group]) => (
					<KanbanGroup key={groupId} id={groupId} onOpen={open} {...group} />
				))}
			</Flex>
			<ModalAddEditTask
				opened={addTaskOpened}
				onClose={close}
				onSubmit={onSubmit}
			/>
		</DragDropContext>
	)
}

export default Kanban
