import { ReactNode } from 'react'
import { Text } from '@mantine/core'
import {
	ArrowDown,
	ArrowElbowDownLeft,
	ArrowUp,
	Cursor,
} from '@phosphor-icons/react'

import { Kbd } from '@/components'

interface ActionsWrapperProps {
	children: ReactNode
}

const ActionsWrapper = ({ children }: ActionsWrapperProps) => {
	return (
		<div className="px-4">
			{children}
			<Text
				align="center"
				py={32}
				fz="var(--fs-text-sm)"
				color="gray.4"
				className="flex flex-wrap items-center justify-center gap-1.5"
			>
				<Kbd onlyIcon>
					<Cursor weight="bold" size={16} />
				</Kbd>
				or
				<Kbd onlyIcon>
					<ArrowUp weight="bold" size={16} />
				</Kbd>
				<Kbd onlyIcon>
					<ArrowDown weight="bold" size={16} />
				</Kbd>
				to navigate,
				<Kbd onlyIcon>
					<ArrowElbowDownLeft weight="bold" size={16} />
				</Kbd>
				to select, and
				<span>
					<Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
				</span>
				to search anytime
			</Text>
		</div>
	)
}

export default ActionsWrapper
