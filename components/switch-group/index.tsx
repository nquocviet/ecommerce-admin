import React, { ReactNode } from 'react'
import { FieldValues } from 'react-hook-form'
import { clsx, Flex, Text } from '@mantine/core'

import Switch, { SwitchProps } from '@/components/switch'

interface SwitchGroupProps<T extends FieldValues>
	extends Omit<SwitchProps<T>, 'title'> {
	title: ReactNode
	description?: ReactNode
}

const SwitchGroup = <T extends FieldValues>({
	title,
	description,
	name,
	control,
	className,
	...rest
}: SwitchGroupProps<T>) => {
	return (
		<div className={clsx('text-sm text-gray-600', className)}>
			<Flex justify="space-between" align="center" className="mb-1.5">
				<Text className="font-semibold text-black">{title}</Text>
				<Switch name={name} control={control} {...rest} />
			</Flex>
			{description && <Text>{description}</Text>}
		</div>
	)
}

export default SwitchGroup
