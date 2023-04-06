import { ReactNode } from 'react'
import {
	ActionIcon,
	Badge,
	Box,
	clsx,
	Flex,
	Menu,
	Text,
	ThemeIcon,
} from '@mantine/core'
import { CreditCard, DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

type TShippingOptionProps = {
	title: ReactNode
	description?: ReactNode
	className?: string
}

const ShippingOption = ({
	title,
	description,
	className,
}: TShippingOptionProps) => {
	return (
		<Flex
			justify="space-between"
			align="center"
			gap={16}
			className={clsx(
				'rounded-lg border border-solid border-gray-200 p-4',
				className
			)}
		>
			<Flex align="center" gap={16}>
				<ThemeIcon
					variant="outlined"
					color="gray"
					size="xl"
					className="rounded-md bg-gray-100"
				>
					<CreditCard size={20} />
				</ThemeIcon>
				<Box>
					<Text className="font-semibold">{title}</Text>
					{description && (
						<Text className="text-sm text-gray-500">{description}</Text>
					)}
				</Box>
			</Flex>
			<Flex align="center" gap={16}>
				<Badge
					color="green"
					size="lg"
					radius="sm"
					className="px-2 font-semibold capitalize"
				>
					Store
				</Badge>
				<Menu shadow="md" width={200}>
					<Menu.Target>
						<ActionIcon>
							<DotsThree size={20} weight="bold" />
						</ActionIcon>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item icon={<NotePencil size={18} />}>Edit</Menu.Item>
						<Menu.Item
							icon={<Trash size={18} />}
							sx={{
								color: 'var(--red-600)',
							}}
						>
							Delete
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Flex>
		</Flex>
	)
}

export default ShippingOption
