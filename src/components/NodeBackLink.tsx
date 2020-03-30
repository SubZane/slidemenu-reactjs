import React from 'react'
import { styled, pseudo } from './theme'

const BackLink = styled.a({
	display: 'block',
	color: '#3d3b39',
	textDecoration: 'none',
	font: {
		size: '14px'
	},
	padding: {
		top: '15px',
		bottom: '15px',
		left: '35px',
		right: '20px'
	},
	lineHeight: '20px',
	outline: {
		style: 'none'
	},
	position: 'relative',
	cursor: 'pointer',
	backgroundColor: 'rgba(220, 221, 215, 1)',
	...pseudo(':hover', {
		backgroundColor: 'rgba(220, 221, 215, 0.5)',
		color: '#3d3b39'
	}),
	...pseudo(':not([href]):hover', {
		backgroundColor: 'rgba(220, 221, 215, 0.5)',
		color: '#3d3b39'
	}),
	...pseudo(':not([href])', {
		color: '#3d3b39'
	}),
	...pseudo(':after', {
		right: '15px',
		color: 'rgba(104, 104, 104, 0.5)',
		position: 'absolute',
		top: 0,
		lineHeight: '50px',
		font: {
			family: '"Font Awesome 5 Free"',
			size: '12px'
		},
		left: '15px',
		content: '"\\f04b"',
		transform: 'rotate(180deg)'
	})
})

interface IProps {
	backButtonText: string
	handleClick: () => void
}

function NodeBackLink(props: IProps) {
	return (
		<li>
			<BackLink onClick={props.handleClick}>{props.backButtonText}</BackLink>
		</li>
	)
}

export default NodeBackLink
