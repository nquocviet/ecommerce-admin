import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Text } from '@mantine/core'
import Link from 'next/link'

import { Meta, TextInput } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'

const defaultValues = {
	email: '',
}

const ResetPassword = () => {
	const { control, handleSubmit } = useForm({ defaultValues })

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<>
			<Meta
				title={`Reset password | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.RESET_PASSWORD}`}
			/>
			<div className="mx-8 mb-8 text-gray-500">
				<Text>
					Enter your email address below, and we&apos;ll send you instructions
					on how to reset your password.
				</Text>
			</div>
			<div className="mx-16">
				<form onSubmit={handleSubmit(onSubmit)} className="mb-4 text-left">
					<TextInput
						name="email"
						control={control}
						size="md"
						placeholder="lebron@james.com"
						className="mb-4"
					/>
					<Button
						type="submit"
						color="primary"
						variant="filled"
						size="md"
						fullWidth
					>
						Send reset instructions
					</Button>
				</form>
				<Link
					href={ROUTES.LOGIN}
					className="text-sm font-medium text-gray-500 no-underline"
				>
					Go back to sign in
				</Link>
			</div>
		</>
	)
}

export default ResetPassword
