import React from 'react';
import styled, {css} from 'styled-components';

const Content = styled.div`
	color: #fff;
	background: #e74c3c;
	margin: 0 auto;
	max-width: 600px;
	overflow: hidden;
	position: absolute;
	bottom: 0px;
	top: 0;
	left: 0;
	right: 0;

  ${props => props.animation === "door-left" && css`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: ${props => props.borderRadius || "5px"};
		border-top-left-radius: 0;
		border-top-right-radius: ${props => props.borderRadius || "5px"};

		transform-style: preserve-3d;
		transform: translateZ(100px) translateX(0%) rotateY(90deg);
		transform-origin: 0 100%;
		opacity: 0;
		transition: all;
		transition-duration: ${props => props.transitionDuration || "0.5s"};
	`}

	${props => props.animation === "door-right" && css`
		border-bottom-left-radius: ${props => props.borderRadius || "5px"};
		border-bottom-right-radius: 0;
		border-top-left-radius: ${props => props.borderRadius || "5px"};
		border-top-right-radius: 0;

		transform-style: preserve-3d;
		transform: translateZ(100px) translateX(30%) rotateY(-90deg);
		transform-origin: 100% 0;
		opacity: 0;
		transition: all;
		transition-duration: ${props => props.transitionDuration || "0.5s"};
	`}

	${props => props.animation === "flip-bottom" && css`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: ${props => props.borderRadius || "5px"};
		border-top-right-radius: ${props => props.borderRadius || "5px"};
		bottom: 0;

		transform-style: preserve-3d;
		transform: translateY(100%) rotateX(90deg);
		transform-origin: 0 100%;
		opacity: 0;
		transition-timing-function: ease-out;
		transition: all;
		transition-duration: ${props => props.transitionDuration || "0.5s"};
	`}

	${props => props.visible && (props.animation === "door-left" || props.animation === "door-right") && css`
		transform: translateZ(0px) translateX(0%) rotateY(0deg);
		opacity: 1;
  `}

	${props => props.visible && props.animation === "flip-bottom" && css`
		transform: translateY(0%) rotateX(0deg);
		opacity: 1;
  `}

`

const Inner = styled.div`
	overflow-y: auto;
	padding-left: 20px;
	padding-right: 20px;
	margin: 0;
	font-weight: 300;
	font-size: 1.15em;
	position: absolute;
	bottom: 20px;
	top: 20px;
`


function PanelContent (props) {
	return (
		<Content
			borderRadius={props.borderRadius}
			visible={props.visible}
			animation={props.animation}
			transitionDuration={props.transitionDuration}l>
			<Inner>
				{props.children}
			</Inner>
		</Content>
	)
}

export default PanelContent
