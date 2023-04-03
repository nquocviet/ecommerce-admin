import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, Paper, Title, Tooltip } from '@mantine/core'
import { Info, Plus } from '@phosphor-icons/react'

import { columns } from '@/columns/tax-details'
import { Checkbox, PageTitle, Select, Table } from '@/components'
import { APP_NAME } from '@/constants/common'

const Details = () => {
	const { control } = useForm()

	return (
		<Paper shadow="xs" p="xl" className="h-full">
			<PageTitle
				title="Details"
				size="sm"
				className="mb-6"
				action={
					<Button
						variant="outline"
						color="gray"
						size="xs"
						leftIcon={<Plus size={16} />}
					>
						New task rate
					</Button>
				}
			/>
			<Table
				minHeight={82}
				records={[{ name: 'Default', code: null, rate: 0 }]}
				columns={columns}
				className="mb-6"
			/>
			<Title order={2} className="mb-4 text-lg font-semibold">
				Tax Calculation Settings
			</Title>
			<Flex direction="column" gap={16}>
				<Select
					control={control}
					name="tax-provider"
					label="Tax Provider"
					data={[
						{ value: '0', label: 'System Tax Provider' },
						{ value: '1', label: 'Company Tax Provider' },
					]}
					defaultValue="0"
					className="mb-4"
				/>
				<Checkbox
					control={control}
					name="calc-automatic"
					label="Calculate taxes automatically?"
					rightIcon={
						<Tooltip
							width={240}
							label={`When checked ${APP_NAME} will automatically apply tax calculations to Carts in this Region. When unchecked you will have to manually compute taxes at checkout. Manual taxes are recommended if using a 3rd party tax provider to avoid performing too many requests`}
							multiline
						>
							<Info size={18} className="text-gray-500" />
						</Tooltip>
					}
					defaultChecked={true}
				/>
				<Checkbox
					control={control}
					name="apply-tax"
					label="Apply tax to gift cards?"
					rightIcon={
						<Tooltip
							width={240}
							label="When checked taxes will be applied to gift cards on checkout. In some countries tax regulations require that taxes are applied to gift cards on purchase."
							multiline
						>
							<Info size={18} className="text-gray-500" />
						</Tooltip>
					}
					defaultChecked={true}
				/>
			</Flex>
		</Paper>
	)
}

export default Details
