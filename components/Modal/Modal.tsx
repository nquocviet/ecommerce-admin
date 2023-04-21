import React, { ReactNode } from 'react'
import { Modal as MantineModal, ModalBaseProps } from '@mantine/core'

type TModalProps = Omit<ModalBaseProps, '__staticSelector'> & {
	action: ReactNode
	centered: boolean
}

const Modal = ({
	action,
	title,
	children,
	opened,
	centered,
	onClose,
	...rest
}: TModalProps) => {
	return (
		<MantineModal.Root
			opened={opened}
			onClose={onClose}
			centered={centered}
			{...rest}
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header>
					<MantineModal.Title>{title}</MantineModal.Title>
					<MantineModal.CloseButton />
				</MantineModal.Header>
				<MantineModal.Body>{children}</MantineModal.Body>
				{action && (
					<MantineModal.Header
						sx={{
							top: 'unset',
							bottom: 0,
							paddingLeft: 0,
							paddingRight: 0,
						}}
					>
						{action}
					</MantineModal.Header>
				)}
			</MantineModal.Content>
		</MantineModal.Root>
	)
}

export default Modal
