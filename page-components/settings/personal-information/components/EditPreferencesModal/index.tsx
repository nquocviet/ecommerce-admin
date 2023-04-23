import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'

import { Modal, ModalAction, SwitchGroup } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const EditPreferencesModal = ({ opened, onClose }: ModalOpenedProps) => {
	const { control } = useForm()

	return (
		<Modal
			size="xl"
			title="Edit preferences"
			opened={opened}
			onClose={onClose}
			action={
				<ModalAction>
					<Button size="sm" color="gray" variant="outline">
						Cancel
					</Button>
					<Button size="sm">Submit and close</Button>
				</ModalAction>
			}
			centered
		>
			<Flex direction="column" align="stretch" gap={24}>
				<SwitchGroup
					title="Anonymize my usage data"
					description="You can choose to anonymize your usage data. If this option is selected, we will not collect your personal information, such as your name and email address."
					name="anonymize_usage_data"
					control={control}
				/>
				<SwitchGroup
					title="Opt out of sharing my usage data"
					description="You can always opt out of sharing your usage data at any time."
					name="sharing_usage_data"
					control={control}
				/>
			</Flex>
		</Modal>
	)
}

export default EditPreferencesModal
