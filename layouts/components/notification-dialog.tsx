import React from 'react'
import { Box, Text } from '@mantine/core'
import Image from 'next/image'

const NotificationDialog = () => {
	return (
		<div className="p-6 text-center">
			<Box className="my-6 inline-flex items-center justify-center rounded-full bg-gray-50 p-4">
				<Image
					width={100}
					height={100}
					src="/images/notification-empty-state.png"
					alt="No notifications yet"
				/>
			</Box>
			<Text className="mb-1 text-lg font-semibold">
				You don&apos;t have any notifications
				<br /> right now
			</Text>
			<Text className="text-sm text-gray-500">
				When you do, you&apos;ll see them here.
			</Text>
		</div>
	)
}

export default NotificationDialog
