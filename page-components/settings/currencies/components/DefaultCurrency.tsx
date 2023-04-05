import React from 'react'
import { useForm } from 'react-hook-form'
import { Paper } from '@mantine/core'

import { PageTitle, Select } from '@/components'

const defaultValues = {
	currency: 'EUR',
}

const DefaultCurrency = () => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Paper shadow="xs" p="xl" className="h-full">
			<PageTitle
				title="Default store currency"
				description="This is the currency your prices are shown in."
				size="sm"
				className="mb-8"
			/>
			<Select
				control={control}
				name="currency"
				data={[
					{ value: 'EUR', label: 'EUR (Euro)' },
					{ value: 'USD', label: 'USD (US Dollar)' },
				]}
			/>
		</Paper>
	)
}

export default DefaultCurrency
