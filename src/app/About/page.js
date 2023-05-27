"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import company from '/public/img/about/company.svg';
import FAQ from '/public/img/about/FAQ.svg';
import rewards from '/public/img/about/rewards.svg';
import products from '/public/img/about/products.svg';
import orderAhead from 'public/img/rewards/order-ahead-phone.svg';
import exclusive from 'public/img/rewards/exclusive-member-offers.svg';
import points from 'public/img/rewards/reward-points.svg';
import styles from '../../styles/about.module.css';

export default function About() {
    const [pageState, setPageState] = useState(1);
    return (
        <div className={styles.container}>
            {pageState == 1 &&
                <div className={styles.our_company}>
                    <h1>Our Company</h1>
                    <p>We believe that great sushi starts with the freshest ingredients, and that's why we source only the finest seafood, vegetables, and rice available. Our talented sushi chefs craft each roll with precision and care, ensuring that every bite is a perfect balance of flavors and textures.<br /><br />
                        But we're more than just a sushi restaurant - we're a community of food lovers who share a passion for great food and great company. We're dedicated to providing a warm, welcoming atmosphere where our customers can gather, relax, and enjoy the simple pleasures of good food and good company.<br /><br />
                        So come join us at our sushi restaurant and experience the true taste of Japan. From classic favorites like the California Roll, to exciting new creations that will tantalize your taste buds, we're sure you'll find something to love. We look forward to welcoming you to our restaurant and sharing our love of sushi with you. </p>
                </div>
            }
            {pageState == 2 &&
                <div className={styles.our_products}>
                    <h1>Our Products</h1>
                    <p>We take pride in using only the freshest and highest quality ingredients to create our sushi rolls, nigiri, and sashimi. <br />
                        We receive daily shipments of fresh seafood, which are carefully selected by our experienced sushi chefs for their quality and freshness. Our suppliers understand our commitment to using only the best ingredients, and work closely with us to ensure that we receive the highest quality seafood available. <br /><br />
                        We also use premium-grade sushi rice, which is specially selected for its texture and flavor. Our rice is cooked to perfection, with just the right amount of seasoning to bring out its natural sweetness and complement the flavors of the fish. <br /><br />
                        In addition to seafood and rice, we use fresh, locally sourced vegetables and herbs to add color and flavor to our sushi. We take great care in selecting the best produce, and our chefs work to create beautiful and delicious sushi rolls that showcase the natural flavors of each ingredient. <br /><br />
                        At our sushi restaurant, we believe that the key to great sushi is starting with the best ingredients. That's why we're committed to using only the freshest, highest quality ingredients available. We're confident that you'll taste the difference in every bite.</p>
                </div>
            }
            {pageState == 3 &&
                <div className={styles.rewards}>
                    <h1>Join our Rewards<br /><span className={styles.earning}>& start earning!</span></h1>
                    <div className={styles.rewards_row }>
                        <div>
                            <Image src={points} />
                            <p>Earn 2 points for every $1 spent</p>
                        </div>
                        <div>
                            <Image src={orderAhead} />
                            <p>Order Ahead</p>
                        </div>
                        <div>
                            <Image src={exclusive} />
                            <p>Exclusive Offers</p>
                        </div>
                    </div>
                    <p>As a member, you'll enjoy exclusive benefits and rewards, including special discounts, free appetizers, and more. With every purchase you make, you'll earn points that can be redeemed for free sushi rolls, nigiri, and sashimi, as well as other exciting rewards.<br /><br/>
                        Joining our rewards program is quick and easy. Simply sign up online or in-store, and start earning points right away. And with every purchase, you'll be one step closer to earning free sushi and other amazing rewards.</p>
                </div>
            }
            {pageState == 4 &&
                <div className={styles.FAQs}>
                    <h1>Frequently Asked Questions</h1>
                </div>
            }
            <div className={styles.about_buttons_container}>
                <span id={styles.our_company} className={styles.about_button} onClick={() => setPageState(1)}>
                    <Image src={company}/>
                    <h2>Our Company</h2>
                </span>
                <span id={styles.our_products} className={styles.about_button} onClick={() => setPageState(2)}>
                    <Image src={products} />
                    <h2>Our Products</h2>
                </span>
                <span id={styles.Rewards} className={styles.about_button} onClick={() => setPageState(3)}>
                    <Image src={rewards} />
                    <h2>Rewards</h2>
                </span>
                <span id={styles.FAQs} className={styles.about_button} onClick={() => setPageState(4)}>
                    <Image src={FAQ} />
                    <h2>FAQs</h2>
                </span>
            </div>
        </div>

    );
}
