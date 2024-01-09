import React, { ReactNode } from 'react'
import { FieldValues } from 'react-hook-form'
import { clsx, Flex, Text, Tooltip, TooltipProps } from '@mantine/core'
import { Info } from '@phosphor-icons/react'

import Switch, { SwitchProps } from '@/components/switch'

interface SwitchGroupProps<T extends FieldValues>
	extends Omit<SwitchProps<T>, 'title'> {
	title: ReactNode
	description?: ReactNode
	hint?: string
	hintProps?: Omit<TooltipProps, 'children' | 'label'>
}

const SwitchGroup = <T extends FieldValues>({
	title,
	description,
	hint,
	hintProps,
	name,
	control,
	className,
	...rest
}: SwitchGroupProps<T>) => {
	return (
		<label className={clsx('text-sm text-gray-500', className)}>
			<Flex justify="space-between" align="center" className="mb-1.5">
				<Text className="font-semibold text-black">
					{title}
					{hint && (
						<span className="font-regular">
							<Tooltip width="auto" label={hint} multiline {...hintProps}>
								<Info size={16} className="ml-1 -mb-[3px] text-gray-500" />
							</Tooltip>
						</span>
					)}
				</Text>
				<Switch name={name} control={control} {...rest} />
			</Flex>
			{description && <Text>{description}</Text>}
		</label>
	)
}

export default SwitchGroup
