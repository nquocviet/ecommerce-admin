import { useMemo } from 'react'
import { JSONTree } from 'react-json-tree'
import { ActionIcon, clsx, Collapse, Text } from '@mantine/core'
import { useClipboard, useToggle } from '@mantine/hooks'
import { CaretDown, ClipboardText } from '@phosphor-icons/react'

type JSONViewProps<T extends Record<string, unknown>> = {
	title?: string
	data?: T | null
	className?: string
}

const JSONView = <T extends Record<string, unknown>>({
	title,
	data = {} as T,
	className,
}: JSONViewProps<T>) => {
	const [expanded, setExpanded] = useToggle()
	const { copied, copy } = useClipboard()

	const length = useMemo(() => {
		if (!data) return 0

		return Object.keys(data).length
	}, [data])

	return (
		<div className={className}>
			{title && <Text className="mb-3 text-sm font-semibold">{title}</Text>}
			<div className="w-full rounded-lg bg-gray-50 px-4 py-2">
				<div onClick={() => setExpanded()}>
					<div className="flex cursor-pointer items-center justify-between">
						<div className="flex items-center gap-2 text-sm">
							<p className="my-0 font-semibold">
								{expanded ? '{' : length > 0 ? '{ ... }' : '{}'}
							</p>
							<span className="text-gray-500">
								({length} {length === 1 ? 'item' : 'items'})
							</span>
						</div>
						<ActionIcon size="lg" className="text-gray-500">
							<CaretDown
								size={20}
								className={clsx({
									'rotate-180': expanded,
								})}
							/>
						</ActionIcon>
					</div>
				</div>
				<Collapse transitionDuration={100} in={expanded}>
					<div className="mt-2 text-sm">
						<JSONTree
							data={data}
							hideRoot
							theme={{
								base00: '#F9FAFB',
								base08: '#E53935',
								base09: '#FB8C00',
								base0B: '#0D9488',
								base0D: '#4F46E5',
								extend: {
									background: '#F9FAFB',
								},
							}}
						/>
					</div>
					<div className="flex w-full items-center justify-between">
						{expanded && <p className="my-0 text-sm font-semibold">{`}`}</p>}
						<div className="flex items-center gap-2 text-sm font-regular text-gray-500">
							{copied && <span className="font-medium">Copied!</span>}
							<ActionIcon
								onClick={() => {
									copy(JSON.stringify(data, undefined, 2))
								}}
							>
								<ClipboardText size={20} />
							</ActionIcon>
						</div>
					</div>
				</Collapse>
			</div>
		</div>
	)
}

export default JSONView
