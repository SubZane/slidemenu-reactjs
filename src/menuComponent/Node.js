import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import NodeItem from './NodeItem'
import NodeBackLink from './NodeBackLink'

const SlideLeftOut = keyframes`
  0% {
		transform: translateX(0);
    opacity: 1;
  }
  100% {
		transform: translateX(-100%);
    opacity: 0;
  }
`;

const SlideRightIn = keyframes`
	0% {
		transform: translateX(-100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0px);
		opacity: 1;
	}
`;

const SlideLeftIn = keyframes`
	0% {
		transform: translateX(100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0px);
		opacity: 1;
	}
`;

const SlideRightOut = keyframes`
	0% {
		transform: translateX(0px);
		opacity: 1;
	}
	100% {
		transform: translateX(100%);
		opacity: 0;
	}
`;

const Node = styled.ul `
	position: absolute;
	width: 100%;
	list-style: none;
	margin: 0;
	padding: 0;
	background: ${props => props.backgroundColor || "#F5F3F3"};
	font-family: Arial, Helvetica, sans-serif;
	backface-visibility: hidden;
	${props => props.fade === 'out' && props.direction === 'left' && css`
		animation: ${SlideLeftOut};
  `}
	${props => props.fade === 'in' && props.direction === 'right' && css`
		animation: ${SlideRightIn};
  `}
	${props => props.fade === 'in' && props.direction === 'left' && css`
		animation: ${SlideLeftIn};
  `}
	${props => props.fade === 'out' && props.direction === 'right' && css`
		animation: ${SlideRightOut};
  `}
	${props => props.fade !== null && css`
		animation-duration: ${props => props.transitionDuration || "0.5s"};
		animation-timing-function: ease-in-out;
		animation-fill-mode:forwards;
  `}
	${props => !props.visible && css`
		opacity: 0;
		display: none;
  `}
`;

function NodeElement (props) {
	return (
		<Node backgroundColor={props.backgroundColor} visible={props.visible} fade={props.fade} direction={props.direction} transitionDuration={props.transitionDuration} onAnimationEnd={props.onAnimationEnd}>
		{props.backLink &&
			<NodeBackLink textColor={props.textColor} backButtonText={props.backButtonText} handleClick={props.backLinkClickHandler} />
		}
		{props.menuData.map(data => (
			<NodeItem
				key={data.id}
				item={data}
				textColor={props.textColor}
				handleClick={props.menuClickHandler}
			/>
		))}
	</Node>
	)
}

export default NodeElement
