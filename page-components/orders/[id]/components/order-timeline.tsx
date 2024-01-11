import React from 'react'
import { ActionIcon, Menu, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	ArrowCounterClockwise,
	ArrowsClockwise,
	DotsThree,
	Info,
	PaperPlaneTilt,
	Smiley,
} from '@phosphor-icons/react'

import { PageTitle, Paper } from '@/components'
import {
	ModalRegisterClaim,
	ModalRegisterExchange,
	ModalRequestReturn,
} from '@/page-components/orders/[id]/components'

const OrderTimeline = () => {
	const [
		requestReturnOpened,
		{ open: openRequestReturn, close: closeRequestReturn },
	] = useDisclosure(false)
	const [
		registerExchangeOpened,
		{ open: openRegisterExchange, close: closeRegisterExchange },
	] = useDisclosure(false)
	const [
		registerClaimOpened,
		{ open: openRegisterClaim, close: closeRegisterClaim },
	] = useDisclosure(false)

	return (
		<>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Timeline"
					className="mb-6"
					action={
						<Menu shadow="md" width={220}>
							<Menu.Target>
								<ActionIcon aria-label="More options">
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item
									icon={<ArrowCounterClockwise size={20} />}
									onClick={openRequestReturn}
								>
									Request return
								</Menu.Item>
								<Menu.Item
									icon={<ArrowsClockwise size={20} />}
									onClick={openRegisterExchange}
								>
									Register exchange
								</Menu.Item>
								<Menu.Item
									icon={<Info size={20} />}
									onClick={openRegisterClaim}
								>
									Register claim
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
				<TextInput
					placeholder="Write a note..."
					size="md"
					icon={<Smiley size={20} />}
					rightSection={<PaperPlaneTilt size={20} />}
				/>
			</Paper>
			<ModalRequestReturn
				opened={requestReturnOpened}
				onClose={closeRequestReturn}
			/>
			<ModalRegisterExchange
				opened={registerExchangeOpened}
				onClose={closeRegisterExchange}
			/>
			<ModalRegisterClaim
				opened={registerClaimOpened}
				onClose={closeRegisterClaim}
			/>
		</>
	)
}

export default OrderTimeline
