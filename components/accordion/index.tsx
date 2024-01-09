import React, { useState } from 'react'
import {
	Accordion as MantineAccordion,
	AccordionProps as MantineAccordionProps,
	Text,
	Tooltip,
	TooltipProps,
} from '@mantine/core'
import { Info } from '@phosphor-icons/react'

import { CloseIcon } from '@/components'

type AccordionSection = {
	value: string
	label: string
	hint?: string
	required?: boolean
	content: () => JSX.Element
}

interface AccordionProps<T extends AccordionSection>
	extends Omit<MantineAccordionProps, 'children'> {
	sections: T[]
	hintProps?: Omit<TooltipProps, 'children' | 'label'>
}

const Accordion = <T extends AccordionSection>({
	sections,
	hintProps,
	defaultValue,
	...props
}: AccordionProps<T>) => {
	const [tabsOpened, setTabsOpened] = useState<string[]>([
		...(defaultValue ? [defaultValue] : []),
	])

	const isTabOpened = (tab: string) => {
		return tabsOpened.includes(tab)
	}

	return (
		<MantineAccordion
			{...props}
			value={tabsOpened}
			onChange={setTabsOpened}
			multiple
		>
			{sections.map(({ value, label, hint, required, content: Content }) => (
				<MantineAccordion.Item key={value} value={value} className="py-1">
					<MantineAccordion.Control
						chevron={<CloseIcon open={isTabOpened(value)} />}
					>
						<Text className="text-md font-medium">
							{label}
							{required && (
								<Text component="span" className="ml-0.5 text-red-600">
									*
								</Text>
							)}
							{hint && (
								<span className="font-regular">
									<Tooltip width="auto" label={hint} multiline {...hintProps}>
										<Info size={16} className="ml-1 -mb-[3px] text-gray-500" />
									</Tooltip>
								</span>
							)}
						</Text>
					</MantineAccordion.Control>
					<MantineAccordion.Panel>
						<div className="pb-8">
							<Content />
						</div>
					</MantineAccordion.Panel>
				</MantineAccordion.Item>
			))}
		</MantineAccordion>
	)
}

export default Accordion
