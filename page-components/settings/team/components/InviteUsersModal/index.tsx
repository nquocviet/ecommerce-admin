import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { Modal, Select, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { ROLE_OPTIONS } from '@/constants/common'
import { RolesEnum } from '@/types/common'

const defaultValues = {
	email: '',
	role: RolesEnum.MEMBER,
}

const InviteUsersModal = ({ opened, onClose }: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal
			title="Invite users"
			size="lg"
			confirmText="Invite"
			opened={opened}
			onClose={onClose}
		>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<TextInput
						name="email"
						control={control}
						label="Email"
						type="email"
						placeholder="example@hercules.com"
						required
					/>
					<Select
						name="role"
						control={control}
						label="role"
						data={ROLE_OPTIONS}
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default InviteUsersModal
