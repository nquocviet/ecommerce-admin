import React from 'react'
import { Flex, Footer as MantineFooter, Text } from '@mantine/core'

import { APP_NAME, CURRENT_YEAR } from '@/constants/common'
import {
	ASIDE_WIDTH_LG,
	ASIDE_WIDTH_SM,
	FOOTER_HEIGHT,
} from '@/constants/layout'

interface FooterProps {
	opened: boolean
}

const Footer = ({ opened }: FooterProps) => {
	return (
		<MantineFooter
			height={FOOTER_HEIGHT}
			hidden={opened}
			fixed={false}
			sx={{
				position: 'static',
				height: 'var(--footer-height)',
			}}
			ml={{ sm: ASIDE_WIDTH_SM, lg: ASIDE_WIDTH_LG }}
		>
			<Flex justify="center" align="center" className="h-full text-gray-500">
				<Text align="center">
					<div className="w-full"></div>
					&copy; {CURRENT_YEAR} {APP_NAME}. All rights reversed.
				</Text>
			</Flex>
		</MantineFooter>
	)
}

export default Footer
