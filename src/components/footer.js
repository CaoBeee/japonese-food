import Image from 'next/image'
import footerVector from '/public/img/home/footerVector.svg'
import styles from '/src/styles/footer.module.css'

export default function Footer() {
	return (
		<div className={styles.container}>
			<Image
				src={footerVector}
				alt='rectangle'
				fill={'fill'}
			/>
		</div>
	)
}
