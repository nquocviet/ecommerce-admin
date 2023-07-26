import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { TextInput } from '@/components'

const SalesChannelGeneral = () => {
	const { control } = useFormContext()

	return (
		<Flex direction="column" align="stretch" gap={16}>
			<TextInput
				name="title"
				control={control}
				label="Title"
				placeholder="Website, app, Amazon, physical store POS, facebook product feed..."
				required
			/>
			<TextInput
				name="description"
				control={control}
				label="Description"
				placeholder="Available products at our website, app..."
			/>
		</Flex>
	)
}

export default SalesChannelGeneral
