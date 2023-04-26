import React, { ReactNode } from 'react'
import { FieldValues } from 'react-hook-form'
import { clsx, Flex, Text } from '@mantine/core'

import Switch, { TSwitchProps } from '@/components/Switch'

type TSwitchGroupProps<T extends FieldValues> = TSwitchProps<T> & {
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
}: TSwitchGroupProps<T>) => {
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
