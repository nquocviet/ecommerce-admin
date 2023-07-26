import React from 'react'
import { Box, Flex, Paper, Text } from '@mantine/core'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'

import { SettingsType } from '@/constants/settings'

const SettingsCard = ({
	title,
	description,
	href,
	icon: Icon,
}: SettingsType) => {
	return (
		<Paper radius="md" shadow="xs" p="xl" className="relative h-full">
			<Flex align="center" className="h-full">
				<Box className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100">
					<Icon size={24} className="text-primary-600" />
				</Box>
				<Flex direction="column" className="grow pl-5 pr-2" gap={4}>
					<Text className="font-semibold">{title}</Text>
					<Text className="text-sm text-gray-500">{description}</Text>
				</Flex>
				<CaretRight size={20} className="shrink-0 text-gray-700" />
			</Flex>
			<Link href={href} className="absolute inset-0 top-0 left-0" />
		</Paper>
	)
}

export default SettingsCard
