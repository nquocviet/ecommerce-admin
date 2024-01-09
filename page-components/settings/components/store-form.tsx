import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Divider, Flex, Title } from '@mantine/core'

import { PageTitle, Paper, TextInput } from '@/components'
import { APP_NAME, STORE_NAME } from '@/constants/common'

const defaultValues = {
	store_name: APP_NAME,
	swap_link: '',
	draft_order: '',
	invite_link: '',
}

const StoreForm = () => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Paper>
			<PageTitle
				title="Store Details"
				description="Manage your business details"
				size="sm"
			/>
			<form className="mt-8">
				<Title order={2} className="mb-2 text-lg font-semibold">
					General
				</Title>
				<Flex direction="column" gap={16} className="mb-6">
					<TextInput
						control={control}
						name="store_name"
						label="Store name"
						placeholder={APP_NAME}
					/>
				</Flex>
				<Title order={2} className="mb-2 text-lg font-semibold">
					Advanced settings
				</Title>
				<Flex direction="column" gap={16} className="mb-6">
					<TextInput
						control={control}
						name="swap_link"
						label="Swap link template"
						placeholder={`https://${STORE_NAME.toLowerCase()}.inc/swap={swap_id}`}
					/>
					<TextInput
						control={control}
						name="draft_order"
						label="Draft order link template"
						placeholder={`https://${STORE_NAME.toLowerCase()}.inc/payment={payment_id}`}
					/>
					<TextInput
						control={control}
						name="invite_link"
						label="Invite link template"
						placeholder={`https://${STORE_NAME.toLowerCase()}-admin.inc/invite?token={invite_token}`}
					/>
				</Flex>
				<Box>
					<Divider className="mb-4" />
					<Flex justify="flex-end" gap={12}>
						<Button variant="outline" color="gray">
							Cancel changes
						</Button>
						<Button type="submit">Save</Button>
					</Flex>
				</Box>
			</form>
		</Paper>
	)
}

export default StoreForm
