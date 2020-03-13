import React, {useState} from 'react'
import styled, { keyframes, css } from 'styled-components';

const FadeInTop = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const NodeItem = styled.li `
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 8px;
	white-space: nowrap;
	/*
	animation: ${FadeInTop};
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	backface-visibility: hidden;
	*/
	&:after {
		content: '';
		position: absolute;
		left: 12px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #F4F4F1;
		border: 2px solid #D2D1CB;
		transform: translateY(6px);
	}
	&:first-child {
		font-weight: 600;
		font-size: 15px;
		&:after {
			background: #EC7574;
			border: 2px solid #EC7574;
			border: none;
		}
	}
	&:not(:last-child) {
		&:before {
			content: '';
			position: absolute;
			left: 17px;
			margin-top: 10px;
			width: 2px;
			height: 35px;
			background: #D2D1CB;
		}
	}
`;

const CrumbItem = styled.span `
	color: ${props => props.textColor || "#333"};
	display: inline-block;
`;

function BreadcrumbNode(props) {
	const [isVisible, setIsVisible] = useState(false)

	function onAnimationEnd() {
		console.log('onAnimationEnd')
		setIsVisible(true)
	}

	return (
		<NodeItem visible={isVisible} key={props.data.id} textColor={props.textColor} onAnimationEnd={onAnimationEnd}>
			<CrumbItem key={props.data.id}>{props.data.Title}</CrumbItem>
		</NodeItem>
	)
}

export default BreadcrumbNode
