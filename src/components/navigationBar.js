import React from 'react'
import Link from 'next/link'

export default function NavigationBar() {
	return (
		<React.Fragment>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/Delivery'>Delivery</Link>
				</li>
				<li>
					<Link href='/Contact'>Contact</Link>
				</li>
				<li>
					<Link href='/Order'>Order</Link>
				</li>
				<li>
					<Link href='/About'>About</Link>
				</li>
			</ul>
		</React.Fragment>
	)
}
