import React, { ReactNode } from 'react'
import { Button, Divider, Flex, Modal } from '@mantine/core'

import { ModalOpenedProps } from '@/components/Modal'

type ModalFullscreenProps = ModalOpenedProps & {
	children: ReactNode
	closeOnConfirm?: boolean
	closeOnCancel?: boolean
	cancelText?: string
	confirmText?: string
	onCancel?: () => void
	onConfirm?: () => void
	className?: string
}

const ModalFullscreen = ({
	children,
	className,
	opened,
	closeOnConfirm = false,
	closeOnCancel = true,
	cancelText = 'Cancel',
	confirmText = 'Confirm',
	onClose,
	onCancel,
	onConfirm,
}: ModalFullscreenProps) => {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title={
				(cancelText || confirmText) && (
					<Flex align="stretch" gap={16}>
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
					</Flex>
				)
			}
			transitionProps={{
				duration: 0,
			}}
			closeButtonProps={{
				size: 'md',
				iconSize: 24,
			}}
			styles={() => ({
				header: {
					marginLeft: 'auto',
					marginRight: 'auto',
					maxWidth: '1100px',
					flexDirection: 'row-reverse',
				},
				close: {
					marginLeft: 0,
				},
			})}
			className={className}
			fullScreen
		>
			<Divider color="gray" />
			<div className="mx-auto mt-14 max-w-[760px]">{children}</div>
		</Modal>
	)
}

export default ModalFullscreen
