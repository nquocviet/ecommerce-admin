import React, { ReactNode } from 'react'
import { Modal as MantineModal, ModalBaseProps } from '@mantine/core'

export type ModalOpenedProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

type ModalProps = Omit<ModalBaseProps, '__staticSelector'> & {
	action?: ReactNode
	centered?: boolean
}

const Modal = ({
	action,
	title,
	children,
	opened,
	centered,
	onClose,
	...rest
}: ModalProps) => {
	return (
		<MantineModal.Root
			{...rest}
			opened={opened}
			onClose={onClose}
			centered={centered}
			lockScroll
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
							paddingTop: 0,
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
