import React from 'react'
import { Flex, Loader as MantineLoader, Modal } from '@mantine/core'

const Loader = () => {
	return (
		<Modal
			opened={true}
			onClose={() => null}
			closeOnClickOutside={false}
			closeOnEscape={false}
			withCloseButton={false}
			zIndex={9999}
			styles={{
				content: {
					'& > div': {
						display: 'flex',
						alignItems: 'center',
						maxHeight: '100vh',
						height: '100vh',
					},
				},
			}}
			centered
			lockScroll
			fullScreen
		>
			<Flex align="center" justify="center" className="h-full w-full">
				<MantineLoader size="sm" />
			</Flex>
		</Modal>
	)
}

export default Loader
