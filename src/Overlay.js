import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadein = keyframes`
	0% { opacity: 0;}
	100% {opacity: 1;}
`;

const fadeout = keyframes`
	100% {opacity: 0;}
	0% { opacity: 1;}
`;

const Overlay = styled.div`
	backface-visibility: hidden;
	position: fixed;
	z-index: 1000;
	top: -5000px;
	right: -5000px;
	bottom: -5000px;
	left: -5000px;
	display: none;
	background: rgba(43,46,56,.9);
  ${props => props.fadein && css`
		animation: ${fadein};
		animation-duration: ${props => props.transitionDuration || "0.5s"};
		animation-fill-mode: forwards;
		animation-timing-function: ease-in;
		animation-iteration-count: 1;
		display: block;
  `}
  ${props => props.fadeout && css`
		animation: ${fadeout};
		animation-duration: ${props => props.transitionDuration || "0.5s"};
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;
		opacity: 1;
		display: block;
	`}
	${props => props.hide && css`
		display: none;
	`}
`

function OverlayContainer (props) {
	return (
		<Overlay
			transitionDuration={props.transitionDuration}
			fadein={props.fadein}
			fadeout={props.fadeout}
			hide={props.hideOverlay}
			onClick={props.handleEvent}
			onAnimationEnd={props.onAnimationEnd}
		/>
	)
}

export default OverlayContainer
