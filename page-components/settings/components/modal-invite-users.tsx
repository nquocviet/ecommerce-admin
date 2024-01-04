import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { Modal, ModalOpenedProps, Select, TextInput } from '@/components'
import { ROLE_OPTIONS, STORE_NAME } from '@/constants/common'
import { RolesEnum } from '@/types/common'

const defaultValues = {
	email: '',
	role: RolesEnum.MEMBER,
}

const ModalInviteUsers = (props: ModalOpenedProps) => {
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Modal title="Invite users" size="lg" confirmText="Invite" {...props}>
			<form>
				<Flex direction="column" align="stretch" gap={16}>
					<TextInput
						name="email"
						control={control}
						label="Email"
						type="email"
						placeholder={`example@${STORE_NAME.toLowerCase()}.com`}
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

export default ModalInviteUsers
