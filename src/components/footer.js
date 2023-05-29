import Image from 'next/image'
import footerVector from '/public/img/home/footerVector.svg'

export default function Footer() {
	return (
		<>
			<Image
				src={footerVector}
				alt='rectangle'
				width={1920}
				height={192}
			/>
		</>
	)
}
