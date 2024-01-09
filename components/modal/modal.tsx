import React from 'react'
import { Button, Modal as MantineModal, ModalBaseProps } from '@mantine/core'

import { ModalAction } from '@/components'

export type ModalOpenedProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

interface ModalProps extends Omit<ModalBaseProps, '__staticSelector'> {
	centered?: boolean
	confirmation?: boolean
	closeOnConfirm?: boolean
	closeOnCancel?: boolean
	cancelText?: string | null
	confirmText?: string | null
	withClose?: boolean
	onCancel?: () => void
	onConfirm?: () => void
}

const Modal = ({
	title,
	children,
	opened,
	centered,
	confirmation = false,
	closeOnConfirm = false,
	closeOnCancel = true,
	cancelText = 'Cancel',
	confirmText = 'Confirm',
	withClose = true,
	onClose,
	onCancel,
	onConfirm,
	...rest
}: ModalProps) => {
	return (
		<MantineModal.Root
			{...rest}
			opened={opened}
			onClose={onClose}
			centered={centered ?? true}
			transitionProps={{
				transition: 'fade',
				duration: 200,
				timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			}}
			lockScroll
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header sx={{ zIndex: 1000 }}>
					<MantineModal.Title>{title}</MantineModal.Title>
					{withClose && <MantineModal.CloseButton />}
				</MantineModal.Header>
				<MantineModal.Body>{children}</MantineModal.Body>
				{(cancelText || confirmText) && (
					<MantineModal.Header
						sx={{
							zIndex: 1,
							top: 'unset',
							bottom: 0,
							paddingTop: 0,
							paddingLeft: 0,
							paddingRight: 0,
						}}
					>
						<ModalAction>
							{cancelText && (
								<Button
									size="sm"
									color="gray"
									variant="outline"
									onClick={() => {
										if (closeOnCancel) {
											onClose()
										}
										onCancel?.()
									}}
								>
									{cancelText}
								</Button>
							)}
							{confirmText && (
								<Button
									{...(confirmation && { color: 'red' })}
									size="sm"
									onClick={() => {
										if (closeOnConfirm) {
											onClose()
										}
										onConfirm?.()
									}}
								>
									{confirmText}
								</Button>
							)}
						</ModalAction>
					</MantineModal.Header>
				)}
			</MantineModal.Content>
		</MantineModal.Root>
	)
}

export default Modal
