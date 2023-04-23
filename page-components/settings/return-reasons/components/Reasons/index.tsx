import { Dispatch, SetStateAction, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, Paper } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, RadioBox, RadioGroup } from '@/components'
import { useReturnReasons } from '@/lib/return-reasons'
import { ReturnReasonEntity } from '@/types/return-reason'

type TReasonsProps = {
	reasonSelected: ReturnReasonEntity | null
	setReasonSelected: Dispatch<SetStateAction<ReturnReasonEntity | null>>
}

const Reasons = ({ reasonSelected, setReasonSelected }: TReasonsProps) => {
	const { data } = useReturnReasons()
	const { control, setValue } = useForm()

	useEffect(() => {
		if (data) {
			setReasonSelected(data?.[0])
			setValue('reason', data?.[0].value)
		}
	}, [data, setReasonSelected, setValue])

	const onChange = (value: string) => {
		const reason = data?.find((item) => item.value === value) || null
		setReasonSelected(reason)
		setValue('reason', value)
	}

	return (
		<Paper shadow="xs" p="xl" className="h-full">
			<PageTitle
				title="Return Reasons"
				description="Manage reasons for returned items"
				size="sm"
				action={
					<Button
						variant="outline"
						color="gray"
						size="xs"
						leftIcon={<Plus size={16} />}
					>
						Add reason
					</Button>
				}
			/>
			<form className="mt-8">
				<RadioGroup control={control} name="reason" onChange={onChange}>
					<Flex direction="column" gap={16}>
						{data?.map(({ id, value, label, description }) => (
							<RadioBox
								key={id}
								value={value}
								valueSelected={reasonSelected?.value}
								label={label}
								description={description}
								truncate
							/>
						))}
					</Flex>
				</RadioGroup>
			</form>
		</Paper>
	)
}

export default Reasons
