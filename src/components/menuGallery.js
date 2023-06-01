'use client'
import React, { useEffect, useState, useMemo } from 'react'
import { hasCookie, getCookie } from 'cookies-next'
import MenuItem from './menuGalleryItem'
import philly from '/public/img/menu/phillyRoll.jpg'
import philly2 from '/public/img/menu/phillyRoll2.jpg'
import maki from '/public/img/menu/makiRoll.jpg'
import assorted from '/public/img/menu/assortedNigiri.jpg'
import styles from '../styles/gallery.module.css'
import 'animate.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function MenuGallery() {
	const [selectionState, setSelectionState] = useState('1')
	const [menuItemsVersion, setMenuItemsVersion] = useState(0)
	const [menuState, setMenuState] = useState(0)
	useEffect(() => {
		if (hasCookie('menu_selection_state')) {
			setSelectionState(getCookie('menu_selection_state'))
		} else {
			setSelectionState(1)
		}
		const listenCookieChange = () => {
			setSelectionState(getCookie('menu_selection_state'))
		}
		window.addEventListener('cookie', listenCookieChange)
		return () => window.removeEventListener('cookie', listenCookieChange)
	}, [])
	const menuItemArr = [
		<MenuItem
			key={1}
			menuId={1}
			menuImage={philly}
			title='Philidelphia Roll 1'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={9.99}
		/>,
		<MenuItem
			key={2}
			menuId={2}
			menuImage={philly}
			title='Philidelphia Roll 2'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={9.99}
		/>,
		<MenuItem
			key={3}
			menuId={3}
			menuImage={philly}
			title='Philidelphia Roll 3'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={6.99}
		/>,
		<MenuItem
			key={4}
			menuId={4}
			menuImage={philly2}
			title='Philidelphia Roll 4'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={7.99}
		/>,
		<MenuItem
			key={5}
			menuId={5}
			menuImage={philly2}
			title='Philidelphia Roll 5'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={8.99}
		/>,
		<MenuItem
			key={6}
			menuId={6}
			menuImage={philly2}
			title='Philidelphia Roll 6'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={10.99}
		/>,
		<MenuItem
			key={7}
			menuId={7}
			menuImage={maki}
			title='Maki Roll 1'
			description='Imitation crab, carrots, pickled radish and sushi rice rolled in nori.'
			initialPrice={11.99}
		/>,
		<MenuItem
			key={8}
			menuId={8}
			menuImage={maki}
			title='Maki Roll 2'
			description='Imitation crab, carrots, pickled radish and sushi rice rolled in nori.'
			initialPrice={12.99}
		/>,
		<MenuItem
			key={9}
			menuId={9}
			menuImage={maki}
			title='Maki Roll 3'
			description='Imitation crab, carrots, pickled radish and sushi rice rolled in nori.'
			initialPrice={13.99}
		/>,
		<MenuItem
			key={10}
			menuId={10}
			menuImage={assorted}
			title='Assorted Nigiri 1'
			description='Sushi rice topped with either tuna, yellow tail, salmon or unagi.'
			initialPrice={14.99}
		/>,
		<MenuItem
			key={11}
			menuId={11}
			menuImage={assorted}
			title='Assorted Nigiri 2'
			description='Sushi rice topped with either tuna, yellow tail, salmon or unagi.'
			initialPrice={15.99}
		/>,
		<MenuItem
			key={12}
			menuId={12}
			menuImage={assorted}
			title='Assorted Nigiri 3'
			description='Sushi rice topped with either tuna, yellow tail, salmon or unagi.'
			initialPrice={16.99}
		/>,
		<MenuItem
			key={13}
			menuId={13}
			menuImage={philly2}
			title='Philidelphia Roll 7'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={17.99}
		/>,
		<MenuItem
			key={14}
			menuId={14}
			menuImage={maki}
			title='Maki Roll 4'
			description='Imitation crab, carrots, pickled radish and sushi rice rolled in nori.'
			initialPrice={18.99}
		/>,
		<MenuItem
			key={15}
			menuId={15}
			menuImage={maki}
			title='Maki Roll 5'
			description='Imitation crab, carrots, pickled radish and sushi rice rolled in nori.'
			initialPrice={19.99}
		/>,
		<MenuItem
			key={16}
			menuId={16}
			menuImage={maki}
			title='Maki Roll 6'
			description='Imitation crab, carrots, pickled radish and sushi rice rolled in nori.'
			initialPrice={20.99}
		/>,
		<MenuItem
			key={17}
			menuId={17}
			menuImage={philly2}
			title='Philidelphia Roll 8'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={21.99}
		/>,
		<MenuItem
			key={18}
			menuId={18}
			menuImage={philly}
			title='Philidelphia Roll 9'
			description='Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori.'
			initialPrice={22.99}
		/>,
		<MenuItem
			key={19}
			menuId={19}
			menuImage={assorted}
			title='Assorted Nigiri 4'
			description='Sushi rice topped with either tuna, yellow tail, salmon or unagi.'
			initialPrice={23.99}
		/>,
	]

	const menuItems = useMemo(() => {
		switch (selectionState) {
			case '1':
				return menuItemArr
			case '2':
				return menuItemArr.filter(item => item.props.title.includes('Roll'))
			case '3':
				return menuItemArr.filter(item => item.props.title.includes('Nigiri'))
			case '4':
				return menuItemArr.filter(
					item => !item.props.title.includes('Roll') && !item.props.title.includes('Nigiri')
				)
			default:
				return []
		}
	}, [selectionState, menuItemArr])

	const pageSize = 9
	const totalPages = Math.ceil(menuItems.length / pageSize)

	useEffect(() => {
		setMenuItemsVersion(prevVersion => prevVersion + 1)
	}, [selectionState])

	useEffect(() => {
		setMenuState(0)
	}, [menuItemsVersion])

	const handleMenuStateChange = delta => {
		setMenuState(prevState => {
			const newMenuState = prevState + delta
			if (newMenuState >= 0 && newMenuState < totalPages) {
				return newMenuState
			}
			return prevState
		})
	}

	return (
		<span className={styles.gallery_container}>
			<div
				layout={'true'}
				className={styles.gallery_items_container}
			>
				<AnimatePresence mode='popLayout'>
					{menuItems.slice(menuState * pageSize, (menuState + 1) * pageSize).map(item => (
						<motion.div
							key={item.props.menuId}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4 }}
						>
							{item}
						</motion.div>
					))}
				</AnimatePresence>
			</div>
			{totalPages > 1 && (
				<span className={styles.more_less_container}>
					{menuState > 0 && (
						<span
							className={styles.up_span}
							onClick={() => handleMenuStateChange(-1)}
						>
							<div className={styles.up_arrow} />
							<p className={styles.less}>Go Back</p>
						</span>
					)}
					{menuState < totalPages - 1 && (
						<span
							className={styles.down_span}
							onClick={() => handleMenuStateChange(1)}
						>
							<p className={styles.more}>More Items</p>
							<div className={styles.down_arrow} />
						</span>
					)}
				</span>
			)}
		</span>
	)
}
