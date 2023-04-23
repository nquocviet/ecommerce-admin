import React from 'react'
import {
	Avatar,
	Badge,
	Button,
	Divider,
	Flex,
	Paper,
	Text,
} from '@mantine/core'

import { PageTitle } from '@/components'
import { STORE_NAME } from '@/constants/common'

const PersonalForm = () => {
	return (
		<Paper shadow="xs" p="xl">
			<Flex direction="column" align="stretch" gap={32}>
				<PageTitle
					title="Personal information"
					description={`Manage your ${STORE_NAME} profile`}
					size="sm"
				/>
				<Divider />
				<Flex justify="space-between" align="center" gap={12}>
					<Flex align="center" gap={16}>
						<Avatar size="lg" radius="xl" color="primary" variant="filled">
							E
						</Avatar>
						<Text className="font-semibold">example@email.com</Text>
					</Flex>
					<Button color="gray" variant="outline" size="xs">
						Edit information
					</Button>
				</Flex>
				<Divider className="border-gray-300" />
				<Flex justify="space-between" align="center" gap={12}>
					<Flex direction="column" gap={4}>
						<Flex align="center" gap={8}>
							<Text className="font-semibold">Usage insights</Text>
							<Badge
								color="green"
								sx={{ textTransform: 'capitalize', height: '24px' }}
							>
								Active
							</Badge>
						</Flex>
						<Text className="text-sm text-gray-500">
							Share usage insights and help us improve {STORE_NAME}
						</Text>
					</Flex>
					<Button color="gray" variant="outline" size="xs">
						Edit preferences
					</Button>
				</Flex>
			</Flex>
		</Paper>
	)
}

export default PersonalForm
