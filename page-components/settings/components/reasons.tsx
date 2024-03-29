import { Dispatch, SetStateAction, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, Paper, RadioBox, RadioGroup } from '@/components'
import { useReturnReasons } from '@/lib/return-reasons'
import { ModalAddReason } from '@/page-components/settings/components'
import { ReturnReasonEntity } from '@/types/return-reason'

type TReasonsProps = {
	reasonSelected: ReturnReasonEntity | null
	setReasonSelected: Dispatch<SetStateAction<ReturnReasonEntity | null>>
}

const Reasons = ({ reasonSelected, setReasonSelected }: TReasonsProps) => {
	const [opened, { open, close }] = useDisclosure(false)
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
		<Paper className="h-full">
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
						onClick={open}
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
			<ModalAddReason opened={opened} onClose={close} />
		</Paper>
	)
}

export default Reasons
