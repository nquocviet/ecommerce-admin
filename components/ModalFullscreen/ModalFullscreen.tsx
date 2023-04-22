import React, { ReactNode } from 'react'
import { Divider, Modal } from '@mantine/core'

import { ModalOpenedProps } from '@/components/Modal'

type ModalFullscreenProps = ModalOpenedProps & {
	action: ReactNode
	children: ReactNode
	className?: string
}

const ModalFullscreen = ({
	action,
	children,
	className,
	opened,
	onClose,
}: ModalFullscreenProps) => {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title={action}
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
			})}
			className={className}
			fullScreen
		>
			<Divider color="gray" />
			{children}
		</Modal>
	)
}

export default ModalFullscreen
