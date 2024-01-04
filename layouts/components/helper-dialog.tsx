import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Text } from '@mantine/core'
import { DiscordLogo } from '@phosphor-icons/react'
import Link from 'next/link'

import { Textarea, TextInput } from '@/components'

const HelperDialog = () => {
	const { control } = useForm()

	return (
		<div className="p-6">
			<div className="mb-6">
				<Text className="mb-1 text-display-xs font-semibold">
					How can we help?
				</Text>
				<Text className="text-sm text-gray-500">
					We usually respond in a few hours
				</Text>
			</div>
			<form>
				<TextInput
					name="subject"
					control={control}
					size="md"
					label="Subject"
					placeholder="What is it about?"
					className="mb-4"
				/>
				<Textarea
					name="message"
					control={control}
					size="md"
					label="How can we help?"
					placeholder="Write a message..."
					className="mb-6"
					minRows={6}
				/>
				<Link href="#" className="mb-4 block no-underline">
					<div className="flex w-full flex-col items-center justify-center rounded p-4 hover:bg-gray-50">
						<span className="mb-1 text-gray-500">
							<DiscordLogo size={24} weight="fill" />
						</span>
						<Text className="text-center text-sm leading-6 text-gray-500">
							Feel free to join our community of
							<br />
							merchants and e-commerce developers
						</Text>
					</div>
				</Link>
				<Button
					type="submit"
					color="primary"
					variant="filled"
					size="md"
					fullWidth
				>
					Send a message
				</Button>
			</form>
		</div>
	)
}

export default HelperDialog
