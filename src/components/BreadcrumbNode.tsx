import React from 'react'
import { styled, pseudo } from './theme'

const NodeItem = styled.li({
	font: {
		size: '14px',
		weight: 400
	},
	margin: {
		bottom: '8px'
	},
	whiteSpace: 'nowrap',
	...pseudo(':after', {
		content: 'none',
		position: 'absolute',
		left: '12px',
		width: '12px',
		height: '12px',
		borderRadius: '50%',
		backgroundColor: '#f4f4f1',
		border: {
			xy: {
				style: 'solid',
				width: '2px',
				color: '#d2d1cb'
			}
		},
		transform: 'translateY(6px)'
	}),
	...pseudo(':first-child', {
		font: {
			size: '15px',
			weight: 600
		},
		...pseudo(':after', {
			backgroundColor: '#f4f4f1',
			border: {
				xy: {
					style: 'none'
				}
			}
		})
	}),
	...pseudo(':not(:last-child)', {
		...pseudo(':before', {
			content: 'none',
			position: 'absolute',
			left: '17px',
			margin: {
				top: '10px'
			},
			width: '2px',
			height: '35px',
			backgroundColor: '#d2d1cb'
		})
	})
})

const CrumbItem = styled.span({
	display: 'inline-block',
	color: '#3d3b39'
})

interface BreadCrumbProps {
	key: number
	id: number
	title: string
}

function BreadcrumbNode(props: BreadCrumbProps) {
	return (
		<NodeItem key={props.id}>
			<CrumbItem key={props.id}>{props.title}</CrumbItem>
		</NodeItem>
	)
}

export default BreadcrumbNode
