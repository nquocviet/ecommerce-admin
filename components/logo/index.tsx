import React from 'react'
import Image from 'next/image'

import LogoImg from '@/public/images/logo.png'

interface LogoProps {
	size?: number
	alt?: string
	className?: string
}

const Logo = ({ size = 32, alt = 'Logo', className }: LogoProps) => {
	return (
		<Image
			src={LogoImg}
			width={size}
			height={size}
			alt={alt}
			className={className}
		/>
	)
}

export default Logo
