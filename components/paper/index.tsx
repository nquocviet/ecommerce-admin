import React from 'react'
import {
	Paper as MantinePaper,
	PaperProps as MantinePaperProps,
} from '@mantine/core'

const Paper = (props: MantinePaperProps) => {
	return <MantinePaper shadow="xs" p="xl" {...props} />
}

export default Paper
