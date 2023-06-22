'use client'
import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import arrow from '/public/img/contact/Arrow.svg'

export default function Contact() {
	const [submitted, setSubmitted] = useState(false)

	const [formData, setFormData] = useState({
		fName: '',
		lName: '',
		email: '',
		orderNumber: '',
		message: '',
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		console.log(e.target)
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = event => {
		event.preventDefault()
		const { fName, lName, email, orderNumber, message: helpText } = formData
		const mailtoLink = `mailto:hello@japonesefood.com?subject=Contact Form Submission&body=First Name: ${encodeURIComponent(
			fName
		)}%0D%0ALast Name: ${encodeURIComponent(lName)}%0D%0AEmail: ${encodeURIComponent(
			email
		)}%0D%0AOrder Number: ${encodeURIComponent(orderNumber)}%0D%0AHelp Text: ${encodeURIComponent(
			helpText
		)}`

		window.open(mailtoLink, '_blank')
		setSubmitted(true)
		setFormData({
			fName: '',
			lName: '',
			email: '',
			orderNumber: '',
			message: '',
		})
	}

	const successMessage = `We appreciate you taking the time to let us know
	your thoughts and look forward to
	being in contact with you within 3-5 business days. If you don’t hear from us sooner,
	feel free to contact us at`

	return (
		<>
		
		<title>Contact</title>
		<div className={styles.container}>
			<div className={styles.left}>
				<h1 className={styles.header}>Get in touch</h1>
				<Image
					src={arrow}
					alt='arrow'
				/>
				<div className={styles.addressContainer}>
					<p className={styles.visitSentence}>
						Or visit us and speak with someone in person at any of our locations below:
					</p>
					<div className={styles.northSouthContainer}>
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
			</div>
			<div className={styles.right}>
				{!submitted ? (
					<form
						className={styles.contactForm}
						onSubmit={handleSubmit}
					>
						<label htmlFor='fName'>First Name</label>
						<input
							name='fName'
							type='text'
							value={formData.fName}
							onChange={handleInputChange}
							required
						></input>
						<label htmlFor='lName'>Last Name</label>
						<input
							name='lName'
							type='text'
							value={formData.lName}
							onChange={handleInputChange}
							required
						></input>
						<label htmlFor='email'>Email Address</label>
						<input
							name='email'
							type='email'
							value={formData.email}
							onChange={handleInputChange}
							required
						></input>
						<label htmlFor='orderNumber'>Order Number (if applicable)</label>
						<input
							name='orderNumber'
							type='text'
							value={formData.orderNumber}
							onChange={handleInputChange}
						></input>
						<label htmlFor='message'>How can we help you?</label>
						<textarea
							name='message'
							type='textarea'
							value={formData.message}
							onChange={handleInputChange}
							required
						></textarea>
						<button type='submit'>Submit</button>
					</form>
				) : (
					<div className={styles.successMessage}>
						<span>
							Thanks for submitting <br /> your feedback!
						</span>
						<p>{successMessage}</p>
						<a href='mailto:hello@japonesefood.com'>hello@japonesefood.com.</a>
					</div>
				)}
			</div>
			</div>
			</>
	)
}
