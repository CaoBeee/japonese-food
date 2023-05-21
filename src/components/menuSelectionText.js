import React from 'react'

export default function MenuText(props) {
	return (
		<p
			style={{
				textDecoration: props.textDecoration,
				color: props.color,
				fontSize: props.fontSize,
				textShadow: props.textShadow,
			}}
			onClick={props.onClick}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			{props.title}
		</p>
	)
}
