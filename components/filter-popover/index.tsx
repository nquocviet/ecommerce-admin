import React from 'react'
import { Button, Checkbox, Flex, Popover, TextInput } from '@mantine/core'
import { FunnelSimple } from '@phosphor-icons/react'

import { OptionType } from '@/types/common'

interface FilterPopoverProps {
	filterOptions: OptionType[]
}

const FilterPopover = ({ filterOptions }: FilterPopoverProps) => {
	return (
		<Popover width={200} position="bottom" shadow="md" withArrow>
			<Popover.Target>
				<Button
					color="gray"
					variant="outline"
					size="xs"
					rightIcon={<FunnelSimple size={16} />}
				>
					Filters
				</Button>
			</Popover.Target>
			<Popover.Dropdown className="!w-[280px]">
				<Flex gap={8}>
					<Button color="gray" variant="outline" size="sm">
						Clear
					</Button>
					<Button color="primary" variant="filled" size="sm" className="flex-1">
						Apply
					</Button>
				</Flex>
				<div className="my-4 -mx-4 border-t border-b border-r-0 border-l-0 border-solid border-gray-300">
					{filterOptions.map(({ value, label }) => (
						<Checkbox
							key={value}
							value={value}
							label={label}
							className="border-0 border-b border-solid border-gray-300 py-4 px-6 last:border-none"
						/>
					))}
				</div>
				<Flex gap={8}>
					<TextInput placeholder="Name your filter..." />
					<Button color="primary" variant="filled" size="sm">
						Save
					</Button>
				</Flex>
			</Popover.Dropdown>
		</Popover>
	)
}

export default FilterPopover
