import React, { useEffect, useState } from 'react'
import { clsx, Collapse, Divider, Flex, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MENU_LIST, MenuItemType } from '@/constants/menu'
import { hasChildren } from '@/utils'

type TSingleMenuProps = MenuItemType & {
	toggle?: () => void
	className?: string
}

const SingleMenu = ({
	label,
	href,
	icon: Icon,
	toggle,
	className,
}: TSingleMenuProps) => {
	const [active, setActive] = useState(false)
	const { pathname } = useRouter()
	const domain = pathname.split('/')[1]

	useEffect(() => {
		if (domain && href.includes(domain)) {
			setActive(true)
			toggle?.()
		}
	}, [pathname])

	return (
		<NavLink
			active={active}
			component={Link}
			href={href}
			label={label}
			className={clsx('rounded', className)}
			{...(Icon && { icon: <Icon size={20} /> })}
		/>
	)
}

const NestedMenu = ({ label, icon: Icon, children }: MenuItemType) => {
	const [opened, { toggle }] = useDisclosure(false)

	return (
		<>
			<NavLink
				label={label}
				onClick={toggle}
				className="rounded"
				{...(Icon && { icon: <Icon size={20} /> })}
				{...(children && {
					rightSection: (
						<CaretRight size={16} className={clsx(opened && 'rotate-90')} />
					),
				})}
			/>
			{children && (
				<Collapse in={opened} transitionDuration={150}>
					{children.map((item) => (
						<SingleMenu
							key={item.label}
							className="pl-12"
							toggle={toggle}
							{...item}
						/>
					))}
				</Collapse>
			)}
		</>
	)
}

const MenuItem = (props: MenuItemType) => {
	const Component = hasChildren(props) ? NestedMenu : SingleMenu

	return <Component {...props} />
}

const Menu = () => {
	return (
		<Flex direction="column" align="stretch" gap={6} className="font-medium">
			{MENU_LIST.map((menu, index) => {
				const isLast = index === MENU_LIST.length - 1

				return (
					<React.Fragment key={index}>
						{menu.map((item, key) => (
							<MenuItem key={key} {...item} />
						))}
						{!isLast && <Divider color="gray.2" />}
					</React.Fragment>
				)
			})}
		</Flex>
	)
}

export default Menu
