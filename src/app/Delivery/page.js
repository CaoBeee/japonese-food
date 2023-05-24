import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Delivery.module.css'
import sushi from '/public/img/delivery/Sushi.svg'
import addressIcon from '/public/img/delivery/InputAddressIcon.svg'
import arrow from '/public/img/delivery/InputArrowIcon.svg'

export default function Delivery() {
	return (
		<React.Fragment>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1>
						You order,
						<br />
						<span className={styles.headerSpan}> we deliver.</span>
						<br />
					</h1>
					<div>
						<div className={styles.addressBtn}>
							<Image
								className={styles.addressIcon}
								src={addressIcon}
								alt='Icon'
							/>
							<input
								placeholder='Enter delivery address'
								type='text'
							/>
							<Image
								className={styles.arrowIcon}
								src={arrow}
								alt='Icon'
							/>
						</div>
					</div>
					<p>Not ready to order yet? Take a look at our menu for something delicious.</p>
					<button className={styles.menuBtn}>Menu</button>
				</div>
				<div
					className={styles.sushi}
					style={{
						backgroundImage: `url(${sushi.src})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '900px 810px',
					}}
				></div>
			</div>
		</React.Fragment>
	)
}
