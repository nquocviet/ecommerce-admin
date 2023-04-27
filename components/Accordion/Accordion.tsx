import React, { useState } from 'react'
import {
	Accordion as MantineAccordion,
	AccordionProps,
	Text,
	Tooltip,
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

type TAccordionProps<T extends AccordionSection> = Omit<
	AccordionProps,
	'children'
> & {
	sections: T[]
}

const Accordion = <T extends AccordionSection>({
	sections,
	defaultValue,
	...props
}: TAccordionProps<T>) => {
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
								<Tooltip width={240} label={hint} multiline>
									<Info size={16} className="ml-1 -mb-[3px] text-gray-600" />
								</Tooltip>
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
