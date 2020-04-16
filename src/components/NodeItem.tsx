import React, { useState } from 'react'
import { styled, pseudo } from './theme'
import { Style } from '@glitz/type'
import { treemenuObjectType, ParentNode } from '../helpers/types'

const NodeLink = styled.a({
	display: 'block',
	color: '#3d3b39',
	textDecoration: 'none',
	font: {
		size: '14px',
	},
	padding: {
		top: '15px',
		bottom: '15px',
		left: '20px',
		right: '20px',
	},
	lineHeight: '20px',
	outline: {
		style: 'none',
	},
	cursor: 'pointer',
	position: 'relative',
	borderBottom: {
		width: '1px',
		style: 'solid',
		color: 'rgba(0, 0, 0, 0.1)',
	},
	...pseudo(':hover', {
		color: '#3d3b39',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		textDecoration: 'none',
	}),
	...pseudo(':not([href]):hover', {
		color: '#3d3b39',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	}),
	...pseudo(':not([href])', {
		color: '#3d3b39',
	}),
})

const hasChildrenStyles = {
	...pseudo(':after', {
		right: '10px',
		position: 'absolute',
		background: {
			image: 'url("img/arrow-right.svg")',
			repeat: 'no-repeat',
		},
		width: '12px',
		height: '12px',
		top: '18px',
		content: '""',
		display: 'inline-block',
	}),
} as Style

interface IProps {
	hasChildren: boolean
	handleClick: (id: number, node: ParentNode) => void
	title: string
	url: string
	key: number
	id: number
	nodeData: treemenuObjectType
}

function SlideNodeItem(props: IProps) {
	const [node] = useState<ParentNode>({
		href: props.nodeData.href,
		text: props.nodeData.text,
		iteration: props.nodeData.iteration,
		id: props.nodeData.id,
		linkId: props.nodeData.linkId,
		isRootCategoryPage: props.nodeData.isRootCategoryPage,
		active: props.nodeData.active,
		nodeLevel: 0,
	})
	return (
		<li>
			<NodeLink
				css={props.hasChildren ? hasChildrenStyles : {}}
				href={props.url}
				onClick={() => (props.hasChildren ? props.handleClick(props.id, node) : null)}>
				{props.title}
			</NodeLink>
		</li>
	)
}

export default SlideNodeItem
