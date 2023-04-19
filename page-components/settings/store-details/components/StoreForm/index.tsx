import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Divider, Flex, Paper, Title } from '@mantine/core'

import { PageTitle, TextInput } from '@/components'
import { APP_NAME } from '@/constants/common'

const defaultValues = {
	storeName: APP_NAME,
	swapLink: '',
	draftOrder: '',
	inviteLink: '',
}

const StoreForm = () => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Paper shadow="xs" p="xl">
			<PageTitle
				title="Store Details"
				description="Manage your business details"
				size="sm"
				className="mb-8"
			/>
			<form>
				<Title order={2} className="mb-2 text-lg font-semibold">
					General
				</Title>
				<Flex direction="column" gap={16} className="mb-6">
					<TextInput
						control={control}
						name="storeName"
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
						name="swapLink"
						label="Swap link template"
						placeholder="https://hercules.inc/swap={swap_id}"
					/>
					<TextInput
						control={control}
						name="draftOrder"
						label="Draft order link template"
						placeholder="https://hercules.inc/payment={payment_id}"
					/>
					<TextInput
						control={control}
						name="inviteLink"
						label="Invite link template"
						placeholder="https://hercules-admin.inc/invite?token={invite_token}"
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
