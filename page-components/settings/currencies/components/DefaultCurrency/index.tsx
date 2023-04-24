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
			/>
			<form>
				<Select
					control={control}
					name="currency"
					className="mt-8"
					data={[
						{ value: 'EUR', label: 'EUR (Euro)' },
						{ value: 'USD', label: 'USD (US Dollar)' },
					]}
				/>
			</form>
		</Paper>
	)
}

export default DefaultCurrency
