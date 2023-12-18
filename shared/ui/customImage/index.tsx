'use client'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'


type CustomImageProps = {
	src: string | StaticImageData
	className?: string | undefined
	placeholderImage?: string | undefined
	height?: number | `${number}` | undefined
	width?: number | `${number}` | undefined
	loadOnScroll?: boolean
	alt?: string | undefined
	sizes?: string | undefined
	blurDataURL?: string | undefined
}

function CustomImage({ src, placeholderImage, loadOnScroll, className, alt, height, width, ...rest }: CustomImageProps) {
	const [url, setUrl] = useState(src)
	

	useEffect(() => {
		setUrl(src)
	}, [src])



	return (
		<Image
			className={className}
			src={url}
			height={height}
			width={width}
			quality={50}
			alt={alt || ''}
			onError={() => setUrl('')}
			{...rest}
		/>
	)
}
export default React.memo(CustomImage)
