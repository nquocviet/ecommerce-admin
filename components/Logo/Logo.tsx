import React from 'react'
import Image from 'next/image'

import LogoImg from '@/public/images/logo.png'

type TLogoProps = {
	alt?: string
	className?: string
}

const Logo = ({ alt = 'Logo', className }: TLogoProps) => {
	return (
		<Image
			src={LogoImg}
			width={32}
			height={32}
			alt={alt}
			className={className}
		/>
	)
}

export default Logo
