'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import company from '/public/img/about/company.svg'
import FAQ from '/public/img/about/FAQ.svg'
import rewards from '/public/img/about/rewards.svg'
import products from '/public/img/about/products.svg'
import orderAhead from '/public/img/rewards/order-ahead-phone.svg'
import exclusive from '/public/img/rewards/exclusive-member-offers.svg'
import points from '/public/img/rewards/reward-points.svg'
import FaqItem from '../../components/faqItem'
import styles from '../../styles/about.module.css'

export default function About() {
	const [pageState, setPageState] = useState(1)
	return (
		<>
			<title>About</title>
			<div className={styles.container}>
				{pageState == 1 && (
					<div className={styles.our_company}>
						<h1>Our Company</h1>
						<p>
							We believe that great sushi starts with the freshest ingredients, and that&apos;s why
							we source only the finest seafood, vegetables, and rice available. Our talented sushi
							chefs craft each roll with precision and care, ensuring that every bite is a perfect
							balance of flavors and textures.
							<br />
							<br />
							But we&apos;re more than just a sushi restaurant - we&apos;re a community of food
							lovers who share a passion for great food and great company. We&apos;re dedicated to
							providing a warm, welcoming atmosphere where our customers can gather, relax, and
							enjoy the simple pleasures of good food and good company.
							<br />
							<br />
							So come join us at our sushi restaurant and experience the true taste of Japan. From
							classic favorites like the California Roll, to exciting new creations that will
							tantalize your taste buds, we&apos;re sure you&apos;ll find something to love. We look
							forward to welcoming you to our restaurant and sharing our love of sushi with you.{' '}
						</p>
					</div>
				)}
				{pageState == 2 && (
					<div className={styles.our_products}>
						<h1>Our Products</h1>
						<p>
							We take pride in using only the freshest and highest quality ingredients to create our
							sushi rolls, nigiri, and sashimi. <br />
							We receive daily shipments of fresh seafood, which are carefully selected by our
							experienced sushi chefs for their quality and freshness. Our suppliers understand our
							commitment to using only the best ingredients, and work closely with us to ensure that
							we receive the highest quality seafood available. <br />
							<br />
							We also use premium-grade sushi rice, which is specially selected for its texture and
							flavor. Our rice is cooked to perfection, with just the right amount of seasoning to
							bring out its natural sweetness and complement the flavors of the fish. <br />
							<br />
							In addition to seafood and rice, we use fresh, locally sourced vegetables and herbs to
							add color and flavor to our sushi. We take great care in selecting the best produce,
							and our chefs work to create beautiful and delicious sushi rolls that showcase the
							natural flavors of each ingredient. <br />
							<br />
							At our sushi restaurant, we believe that the key to great sushi is starting with the
							best ingredients. That&apos;s why we&apos;re committed to using only the freshest,
							highest quality ingredients available. We&apos;re confident that you&apos;ll taste the
							difference in every bite.
						</p>
					</div>
				)}
				{pageState == 3 && (
					<div className={styles.rewards}>
						<h1>
							Join our Rewards
							<br />
							<span className={styles.earning}>& start earning!</span>
						</h1>
						<div className={styles.rewards_row}>
							<div>
								<Image
									src={points}
									alt='points'
								/>
								<p>Earn 2 points for every $1 spent</p>
							</div>
							<div>
								<Image
									src={orderAhead}
									alt='order ahead'
								/>
								<p>Order Ahead</p>
							</div>
							<div>
								<Image
									src={exclusive}
									alt='exclusive'
								/>
								<p>Exclusive Offers</p>
							</div>
						</div>
						<p>
							As a member, you&apos;ll enjoy exclusive benefits and rewards, including special
							discounts, free appetizers, and more. With every purchase you make, you&apos;ll earn
							points that can be redeemed for free sushi rolls, nigiri, and sashimi, as well as
							other exciting rewards.
							<br />
							<br />
							Joining our rewards program is quick and easy. Simply sign up online or in-store, and
							start earning points right away. And with every purchase, you&apos;ll be one step
							closer to earning free sushi and other amazing rewards.
						</p>
					</div>
				)}
				{pageState == 4 && (
					<div className={styles.FAQs}>
						<h1>Frequently Asked Questions</h1>
						<FaqItem
							question='1. Do you offer takeout or delivery options?'
							answer='Yes, please go to the delivery page or order page to place your order.'
						/>
						<FaqItem
							question='2. Do you have any vegetarian or vegan options?'
							answer='Yes, both our cucumber and avocado rolls are vegan friendly.'
						/>
						<FaqItem
							question='3. Can you accommodate dietary restrictions or allergies?'
							answer='Definitely! Please please specify in the "special instructions" section when placing your order.'
						/>
						<FaqItem
							question='4. Do you serve other types of food besides sushi?'
							answer='Our specialty is sushi. Give it a try and your tummy will thank you.'
						/>
					</div>
				)}
				<div className={styles.about_buttons_container}>
					<span
						id={styles.our_company}
						className={styles.about_button}
						onClick={() => setPageState(1)}
					>
						<Image
							src={company}
							alt='company'
						/>
						<h2>Our Company</h2>
					</span>
					<span
						id={styles.our_products}
						className={styles.about_button}
						onClick={() => setPageState(2)}
					>
						<Image
							src={products}
							alt='products'
						/>
						<h2>Our Products</h2>
					</span>
					<span
						id={styles.Rewards}
						className={styles.about_button}
						onClick={() => setPageState(3)}
					>
						<Image
							src={rewards}
							alt='rewards'
						/>
						<h2>Rewards</h2>
					</span>
					<span
						id={styles.FAQs}
						className={styles.about_button}
						onClick={() => setPageState(4)}
					>
						<Image
							src={FAQ}
							alt='faq'
						/>
						<h2>FAQs</h2>
					</span>
				</div>
			</div>
		</>
	)
}
