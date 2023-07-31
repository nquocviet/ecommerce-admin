import React from 'react'
import { Accordion, Grid, Text } from '@mantine/core'

import { Meta, PageTitle, Paper } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { generateFaqs, splitParagraph } from '@/utils'

const categories = [
	[
		{
			title: 'General',
			faqs: generateFaqs('general', 7),
		},
		{
			title: 'Pricing',
			faqs: generateFaqs('pricing', 5),
		},
	],
	[
		{
			title: 'Technical',
			faqs: generateFaqs('technical', 6),
		},
		{
			title: 'Management',
			faqs: generateFaqs('management', 9),
		},
	],
]

const FAQs = () => {
	return (
		<>
			<Meta
				title={`Frequently Asked Questions | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.FAQS}`}
			/>
			<PageTitle
				title="Frequently asked questions"
				description="Need help with something? Here are our most frequently asked questions."
			/>
			<Accordion>
				<Grid gutter={20}>
					{categories.map((column, key) => (
						<Grid.Col key={key} md={6}>
							{column.map(({ title, faqs }) => (
								<Grid key={title} gutter={40}>
									<Grid.Col span={12}>
										<Paper>
											<h2 className="mt-0 mb-2 text-xl font-semibold">
												{title}
											</h2>
											{faqs.map(({ id, title, content }, index) => (
												<Accordion.Item key={id} value={id}>
													<Accordion.Control>
														<Text className="font-medium">
															{index + 1}. {title}
														</Text>
													</Accordion.Control>
													<Accordion.Panel className="whitespace-pre-line text-gray-700">
														{splitParagraph(content).map((paragraph, index) => (
															<Text key={index} className="mb-3 last:mb-0">
																{paragraph}
															</Text>
														))}
													</Accordion.Panel>
												</Accordion.Item>
											))}
										</Paper>
									</Grid.Col>
								</Grid>
							))}
						</Grid.Col>
					))}
				</Grid>
			</Accordion>
		</>
	)
}

export default FAQs
