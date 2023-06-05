import React from 'react'

import { css, styled } from './theme'
import { animationTypes } from './types'

type ContentType = {
	visible: boolean
	animation: animationTypes
}

const Content = styled.div<ContentType>`
	color: #fff;
	background: ${(props) => props.theme.offcanvasPanel.backgroundColor};
	max-width: 600px;
	overflow: hidden;
	position: absolute;
	bottom: 0px;
	top: 0;
	left: 0;
	right: 0;

	${(props) =>
		props.animation === 'flip-top' &&
		css`
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			border-top-left-radius: ${props.theme.offcanvasPanel.borderRadius};
			border-top-right-radius: $props.theme.offcanvasPanel.borderRadius};
			top: 0;

			transform-style: preserve-3d;
			transform: translateY(0%) rotateX(-90deg);
			transform-origin: 100% 0;
			opacity: 0;
			transition-timing-function: ease-out;
			transition: all;
			transition-duration: ${props.theme.offcanvasPanel.transitionDuration};
		`}

	${(props) =>
		props.animation === 'door-left' &&
		css`
			border-bottom-left-radius: 0;
			border-bottom-right-radius: ${props.theme.offcanvasPanel.borderRadius};
			border-top-left-radius: 0;
			border-top-right-radius: ${props.theme.offcanvasPanel.borderRadius};

			transform-style: preserve-3d;
			transform: translateZ(100px) translateX(0%) rotateY(90deg);
			transform-origin: 0 100%;
			opacity: 0;
			transition: all;
			transition-duration: ${props.theme.offcanvasPanel.transitionDuration};
		`}

	${(props) =>
		props.animation === 'door-right' &&
		css`
			border-bottom-left-radius: ${props.theme.offcanvasPanel.borderRadius};
			border-bottom-right-radius: 0;
			border-top-left-radius: ${props.theme.offcanvasPanel.borderRadius};
			border-top-right-radius: 0;

			transform-style: preserve-3d;
			transform: translateZ(100px) translateX(30%) rotateY(-90deg);
			transform-origin: 100% 0;
			opacity: 0;
			transition: all;
			transition-duration: ${props.theme.offcanvasPanel.transitionDuration};
		`}

	${(props) =>
		props.animation === 'flip-bottom' &&
		css`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: ${props.theme.offcanvasPanel.borderRadius};
		border-top-right-radius: $props.theme.offcanvasPanel.borderRadius};
		bottom: 0;

		transform-style: preserve-3d;
		transform: translateY(100%) rotateX(90deg);
		transform-origin: 0 100%;
		opacity: 0;
		transition-timing-function: ease-out;
		transition: all;
		transition-duration: ${props.theme.offcanvasPanel.transitionDuration};
	`}

	${(props) =>
		props.visible &&
		(props.animation === 'door-left' || props.animation === 'door-right') &&
		css`
			transform: translateZ(0px) translateX(0%) rotateY(0deg);
			opacity: 1;
		`}

	${(props) =>
		props.visible &&
		props.animation === 'flip-top' &&
		css`
			transform: translateY(0%) rotateX(0deg);
			opacity: 1;
		`}

	${(props) =>
		props.visible &&
		props.animation === 'flip-bottom' &&
		css`
			transform: translateY(0%) rotateX(0deg);
			opacity: 1;
		`}
`

const Inner = styled.div`
	overflow-y: auto;
	padding-left: ${(props) => props.theme.offcanvasPanel.innerPadding};
	padding-right: ${(props) => props.theme.offcanvasPanel.innerPadding};
	margin: 0;
	font-weight: 300;
	font-size: 1.15em;
	position: absolute;
	bottom: ${(props) => props.theme.offcanvasPanel.innerPadding};
	top: ${(props) => props.theme.offcanvasPanel.innerPadding};
	right: 0;
	left: 0;
`

interface iProps {
	visible: boolean
	animation: animationTypes
	children?: JSX.Element[] | JSX.Element
}

function PanelContent(props: iProps) {
	return (
		<Content visible={props.visible} animation={props.animation}>
			<Inner>{props.children}</Inner>
		</Content>
	)
}

export default PanelContent
