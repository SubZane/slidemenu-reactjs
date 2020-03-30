import React from 'react'
import { styled, css } from './theme'

type NodeTypes = {
	hasChildren: boolean
}

const NodeLink = styled.a<NodeTypes>`
	display: block;
	color: ${props => props.theme.color};
	text-decoration: none;
	font-size: 14px;
	padding: 15px 20px;
	line-height: 20px;
	outline: none;
	cursor: pointer;
	position: relative;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	&:hover {
		color: ${props => props.theme.color};
		background: rgba(0, 0, 0, 0.1);
		text-decoration: none;
	}
	&:not([href]):hover {
		background: rgba(0, 0, 0, 0.1);
		color: ${props => props.theme.color};
	}
	&:not([href]) {
		color: ${props => props.theme.color};
	}
	${props =>
		props.hasChildren &&
		css`
			&:after {
				right: 15px;
				color: rgba(104, 104, 104, 0.5);
				position: absolute;
				top: 0;
				line-height: 50px;
				font-family: 'Font Awesome 5 Free';
				font-weight: 400;
				content: '\f04b';
				font-size: 12px;
				speak: none;
			}
		`}
`

const Node = styled.li``

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
		<Node>
			<NodeLink
				hasChildren={props.hasChildren}
				href={props.url}
				onClick={() => (props.hasChildren ? props.handleClick(props.id, props.title) : null)}>
				{props.title}
			</NodeLink>
		</Node>
	)
}

export default SlideNodeItem
