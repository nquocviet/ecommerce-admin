import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { KanbanTask } from '@/components'
import { ModalAddEditTask } from '@/page-components/kanban/components'
import { generateKanbanTask } from '@/utils'

const defaultGroups = [
	{ id: 1, title: 'To do', tasks: generateKanbanTask(4) },
	{ id: 2, title: 'In progress', tasks: generateKanbanTask(2) },
	{ id: 3, title: 'Resolved', tasks: generateKanbanTask(3) },
]

const Kanban = () => {
	const [addTaskOpened, { open: openAddTask, close: closeAddTask }] =
		useDisclosure(false)
	const [groups, setGroups] = useState(defaultGroups)

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<>
			<Flex gap={20} className="grow overflow-auto">
				{groups.map(({ id, title, tasks }) => (
					<Flex
						key={id}
						direction="column"
						align="stretch"
						className="min-w-[320px] flex-1"
						gap={20}
					>
						<Flex justify="space-between" align="center">
							<h2 className="my-0 text-lg font-semibold">{title}</h2>
							<Button
								color="gray"
								variant="outline"
								size="xs"
								className="bg-white"
								leftIcon={<Plus weight="bold" size={16} />}
								onClick={openAddTask}
							>
								New task
							</Button>
						</Flex>
						{tasks.map((task) => (
							<KanbanTask key={task.id} {...task} />
						))}
					</Flex>
				))}
				<div className="min-w-[320px] flex-1">
					<Button
						color="gray"
						variant="outline"
						leftIcon={<Plus size={20} />}
						className="mt-14 !h-auto bg-white !py-2.5"
						fullWidth
					>
						Add another group
					</Button>
				</div>
			</Flex>
			<ModalAddEditTask
				opened={addTaskOpened}
				onClose={closeAddTask}
				onSubmit={onSubmit}
			/>
		</>
	)
}

export default Kanban
