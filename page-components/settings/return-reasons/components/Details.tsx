import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Menu, Paper } from '@mantine/core'
import { Copy, DotsThree, Trash } from '@phosphor-icons/react'

import { PageTitle, TextInput } from '@/components'

type TDetailsProps = {
	reasonSelected: Record<string, any> | null
}

const defaultValues = {
	label: '',
	description: '',
}

const Details = ({ reasonSelected }: TDetailsProps) => {
	const { control, setValue } = useForm({
		defaultValues,
	})

	useEffect(() => {
		if (reasonSelected) {
			setValue('label', reasonSelected?.label || '')
			setValue('description', reasonSelected?.description || '')
		}
	}, [reasonSelected, setValue])

	return (
		<Paper shadow="xs" p="xl" className="h-full">
			<PageTitle
				title="Details"
				description={reasonSelected?.value}
				size="sm"
				className="mb-6"
				action={
					<Menu shadow="md" width={200}>
						<Menu.Target>
							<ActionIcon>
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item icon={<Copy size={18} />}>Duplicate</Menu.Item>
							<Menu.Item
								icon={<Trash size={18} />}
								sx={{
									color: 'var(--red-600)',
								}}
							>
								Delete
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				}
			/>
			<form>
				<Flex direction="column" gap={16}>
					<TextInput
						control={control}
						name="label"
						label="Label"
						placeholder="Reason label"
					/>
					<TextInput
						control={control}
						name="description"
						label="Description"
						placeholder="Reason description"
					/>
					<Flex justify="flex-end" gap={12} className="mt-6">
						<Button variant="outline" color="gray">
							Cancel changes
						</Button>
						<Button type="submit">Save</Button>
					</Flex>
				</Flex>
			</form>
		</Paper>
	)
}

export default Details
