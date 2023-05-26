import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import arrow from '/public/img/contact/Arrow.svg'

export default function Contact() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h1 className={styles.header}>Get in touch</h1>
				<Image
					src={arrow}
					alt='arrow'
				/>
				<p>Or visit us and speak with someone in person at any of our locations below:</p>
				<div className={styles.addressContainer}>
					<div className={styles.north}>
						<p>
							<span>Northern California</span>
							<br />
							12345 Bay Area Place
							<br />
							San Francisco, CA 12345
						</p>
						<button className={styles.directionBtn}>Get Directions</button>
					</div>

					<div className={styles.south}>
						<p>
							<span>Southern California</span>
							<br />
							12345 Angelenos Way
							<br />
							Los Angeles, CA 12345
						</p>
						<button className={styles.directionBtn}>Get Directions</button>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<form className={styles.contactForm}>
					<label htmlFor='fName'>First Name</label>
					<input
						name='fName'
						type='text'
					></input>
					<label htmlFor='lName'>Last Name</label>
					<input
						name='lName'
						type='text'
					></input>
					<label htmlFor='email'>Email Address</label>
					<input
						name='email'
						type='email'
					></input>
					<label htmlFor='orderNumber'>Order Number (if applicable)</label>
					<input
						name='orderNumber'
						type='text'
					></input>
					<label htmlFor='helpText'>How can we help you?</label>
					<textarea
						name='helpText'
						type='textarea'
					></textarea>
					<button
						className=''
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}
