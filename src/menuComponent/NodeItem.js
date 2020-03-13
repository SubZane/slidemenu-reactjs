import React from "react"
import styled, {css} from 'styled-components';

const NodeLink = styled.a `
	display: block;
	color: ${props => props.textColor || "#333"};
	text-decoration: none;
	font-size: 14px;
	padding: 15px 20px;
	line-height: 20px;
	outline: none;
	cursor: pointer;
	position: relative;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	&:hover {
		color: ${props => props.textColor || "#333"};
		background: rgba(0,0,0,0.1);
		text-decoration: none;
	}
	&:not([href]):hover {
		background: rgba(0,0,0,0.1);
		color: ${props => props.textColor || "#333"};
	}
	&:not([href]) {
			color: ${props => props.textColor || "#333"};
	}
	${props => props.hasChildren && css`
		&:after {
			right: 15px;
	    color: rgba(104,104,104,0.5);
			position: absolute;
			top: 0;
			line-height: 50px;
			font-family: "Font Awesome 5 Free";
			font-weight: 400;
			content: "\f04b";
			font-size: 12px;
			speak: none;
		}
	`}
`;

const Node = styled.li `

`;

function SlideNodeItem(props) {
	return (
		<Node>
			<NodeLink
				textColor={props.textColor}
				hasChildren={props.item.hasOwnProperty('subnodes') ? true : false}
				href={props.item.hasOwnProperty('subnodes') ? null : props.item.url}
				onClick={() => props.item.hasOwnProperty('subnodes') ? props.handleClick(props.item.id, props.item.Title) : null}
			>
			{props.item.Title}
			</NodeLink>
		</Node>
		)
}

export default SlideNodeItem
