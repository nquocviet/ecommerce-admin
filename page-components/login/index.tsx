import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Text } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { object, string } from 'yup'

import { Meta, PasswordInput, TextInput } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { MAX_LENGTH_255, MIN_LENGTH_8 } from '@/constants/validation'
import { sleep } from '@/utils'

const defaultValues = {
	email: '',
	password: '',
}

const schema = object({
	email: string()
		.email('Email must be a valid email address')
		.max(
			MAX_LENGTH_255,
			`Email must be shorter than or equal to ${MAX_LENGTH_255} characters`
		)
		.required('Email should not be empty'),
	password: string()
		.min(
			MIN_LENGTH_8,
			`Password needs to be at least ${MAX_LENGTH_255} characters long`
		)
		.max(
			MAX_LENGTH_255,
			`Password must be shorter than or equal to ${MAX_LENGTH_255} characters`
		)
		.required('Password should not be empty'),
})

const Login = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const { control, handleSubmit } = useForm({
		defaultValues,
		resolver: yupResolver(schema),
	})

	const onSubmit = useCallback(async () => {
		setLoading(true)
		await sleep(1500)
		router.push(ROUTES.HOME)
		setLoading(false)
	}, [router])

	return (
		<>
			<Meta
				title={`Login | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.LOGIN}`}
			/>
			<div className="mx-8 mb-8 text-gray-500">
				<Text>It&apos;s great to see you 👋🏼</Text>
				<Text>Log in to your account below.</Text>
			</div>
			<div className="mx-16">
				<form onSubmit={handleSubmit(onSubmit)} className="mb-4 text-left">
					<TextInput
						name="email"
						control={control}
						size="md"
						placeholder="Enter email..."
						className="mb-4"
					/>
					<PasswordInput
						name="password"
						control={control}
						size="md"
						placeholder="Enter password..."
						className="mb-8"
					/>
					<Button
						type="submit"
						color="primary"
						variant="filled"
						size="md"
						loading={loading}
						fullWidth
					>
						Login
					</Button>
				</form>
				<Link
					href={ROUTES.RESET_PASSWORD}
					className="text-sm font-medium text-gray-500 no-underline"
				>
					Reset password
				</Link>
			</div>
		</>
	)
}

export default Login
