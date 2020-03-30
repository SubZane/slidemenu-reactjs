import React from 'react'
import { styled, pseudo } from './theme'
import { Style } from '@glitz/type'

const NodeLink = styled.a({
	display: 'block',
	color: '#3d3b39',
	textDecoration: 'none',
	font: {
		size: '14px'
	},
	padding: {
		top: '15px',
		bottom: '15px',
		left: '20px',
		right: '20px'
	},
	lineHeight: '20px',
	outline: {
		style: 'none'
	},
	cursor: 'pointer',
	position: 'relative',
	borderBottom: {
		width: '1px',
		style: 'solid',
		color: 'rgba(0, 0, 0, 0.1)'
	},
	...pseudo(':hover', {
		color: '#3d3b39',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		textDecoration: 'none'
	}),
	...pseudo(':not([href]):hover', {
		color: '#3d3b39',
		backgroundColor: 'rgba(0, 0, 0, 0.1)'
	}),
	...pseudo(':not([href])', {
		color: '#3d3b39'
	})
})

const hasChildrenStyles = {
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
		content: '"\\f04b"'
	})
} as Style

interface IProps {
	hasChildren: boolean
	handleClick: (id: number, title: string) => void
	title: string
	url: string
	key: number
	id: number
}

function SlideNodeItem(props: IProps) {
	return (
		<li>
			<NodeLink
				css={props.hasChildren ? hasChildrenStyles : {}}
				href={props.url}
				onClick={() => (props.hasChildren ? props.handleClick(props.id, props.title) : null)}>
				{props.title}
			</NodeLink>
		</li>
	)
}

export default SlideNodeItem
