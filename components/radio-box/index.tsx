import React from 'react'
import {
	clsx,
	Flex,
	Radio as MantineRadio,
	RadioProps,
	Text,
} from '@mantine/core'

interface RadioBoxProps extends RadioProps {
	valueSelected?: string
	truncate?: boolean
}

const RadioBox = ({
	valueSelected,
	truncate,
	label,
	description,
	...rest
}: RadioBoxProps) => {
	const isChecked = rest.value === valueSelected

	return (
		<label
			className={clsx(
				'block w-full cursor-pointer rounded-lg border border-solid p-4',
				isChecked
					? 'border-primary-600 ring-1 ring-inset ring-primary-600 ring-offset-0 ring-offset-current'
					: 'border-gray-300'
			)}
		>
			<Flex className="text-sm" gap={12}>
				<MantineRadio {...rest} />
				<div className={clsx('-mt-0.5', truncate && 'truncate')}>
					<Text className="font-semibold">{label}</Text>
					{description && (
						<Text
							className={clsx(
								'mt-1.5 text-sm text-gray-500',
								truncate && 'truncate'
							)}
						>
							{description}
						</Text>
					)}
				</div>
			</Flex>
		</label>
	)
}

export default RadioBox
