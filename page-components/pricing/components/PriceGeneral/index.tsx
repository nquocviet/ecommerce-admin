import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { TextInput } from '@/components'

const PriceGeneral = () => {
	const { control } = useFormContext()

	return (
		<Flex direction="column" align="stretch" gap={16}>
			<TextInput
				name="name"
				control={control}
				label="Name"
				placeholder="B2B, Black Friday..."
				required
			/>
			<TextInput
				name="description"
				control={control}
				label="Description"
				placeholder="For our business partners..."
				required
			/>
		</Flex>
	)
}

export default PriceGeneral
