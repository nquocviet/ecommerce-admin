import React from 'react'
import Image from 'next/image'

import LogoImg from '@/public/images/logo.png'

interface LogoProps {
	alt?: string
	className?: string
}

const Logo = ({ alt = 'Logo', className }: LogoProps) => {
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
