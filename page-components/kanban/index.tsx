import React, { useState } from 'react'
import { Button, Grid } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { ModalAddTask } from '@/page-components/kanban/components'

const defaultGroups = [
	{ id: 1, title: 'To do', tasks: [] },
	{ id: 2, title: 'In progress', tasks: [] },
	{ id: 3, title: 'Resolved', tasks: [] },
]

const Kanban = () => {
	const [addTaskOpened, { open: openAddTask, close: closeAddTask }] =
		useDisclosure(false)
	const [groups, setGroups] = useState(defaultGroups)

	return (
		<>
			<Grid gutter={20}>
				{groups.map(({ id, title, tasks }) => (
					<Grid.Col span="auto" key={id}>
						<h2 className="mt-0 mb-4 text-lg font-semibold">{title}</h2>
						<Button
							color="gray"
							variant="outline"
							leftIcon={<Plus size={20} />}
							className="!h-auto bg-white !py-2.5"
							onClick={openAddTask}
							fullWidth
						>
							Add new task
						</Button>
					</Grid.Col>
				))}
				<Grid.Col span="auto">
					<Button
						color="gray"
						variant="outline"
						leftIcon={<Plus size={20} />}
						className="mt-11 !h-auto bg-white !py-2.5"
						fullWidth
					>
						Add another group
					</Button>
				</Grid.Col>
			</Grid>
			<ModalAddTask
				opened={addTaskOpened}
				onClose={closeAddTask}
				onSubmit={() => null}
			/>
		</>
	)
}

export default Kanban
