import React from 'react'
import styled, { css } from 'styled-components'

type ContentType = {
	borderRadius: string
	visible: boolean
	animation: string
	backgroundColor: string
	transitionDuration: string
}

const Content = styled.div<ContentType>`
	color: #fff;
	background: ${props => props.backgroundColor};
	max-width: 600px;
	overflow: hidden;
	position: absolute;
	bottom: 0px;
	top: 0;
	left: 0;
	right: 0;

  ${props =>
		props.animation === 'door-left' &&
		css`
			border-bottom-left-radius: 0;
			border-bottom-right-radius: ${props.borderRadius};
			border-top-left-radius: 0;
			border-top-right-radius: ${props.borderRadius};

			transform-style: preserve-3d;
			transform: translateZ(100px) translateX(0%) rotateY(90deg);
			transform-origin: 0 100%;
			opacity: 0;
			transition: all;
			transition-duration: ${props.transitionDuration};
		`}

	${props =>
		props.animation === 'door-right' &&
		css`
			border-bottom-left-radius: ${props.borderRadius};
			border-bottom-right-radius: 0;
			border-top-left-radius: ${props.borderRadius};
			border-top-right-radius: 0;

			transform-style: preserve-3d;
			transform: translateZ(100px) translateX(30%) rotateY(-90deg);
			transform-origin: 100% 0;
			opacity: 0;
			transition: all;
			transition-duration: ${props.transitionDuration};
		`}

	${props =>
		props.animation === 'flip-bottom' &&
		css`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: ${props.borderRadius};
		border-top-right-radius: $props.borderRadius};
		bottom: 0;

		transform-style: preserve-3d;
		transform: translateY(100%) rotateX(90deg);
		transform-origin: 0 100%;
		opacity: 0;
		transition-timing-function: ease-out;
		transition: all;
		transition-duration: ${props.transitionDuration};
	`}

	${props =>
		props.visible &&
		(props.animation === 'door-left' || props.animation === 'door-right') &&
		css`
			transform: translateZ(0px) translateX(0%) rotateY(0deg);
			opacity: 1;
		`}

	${props =>
		props.visible &&
		props.animation === 'flip-bottom' &&
		css`
			transform: translateY(0%) rotateX(0deg);
			opacity: 1;
		`}

`

type InnerType = {
	innerPadding: string
}

const Inner = styled.div<InnerType>`
	overflow-y: auto;
	padding-left: ${props => props.innerPadding};
	padding-right: ${props => props.innerPadding};
	margin: 0;
	font-weight: 300;
	font-size: 1.15em;
	position: absolute;
	bottom: ${props => props.innerPadding};
	top: ${props => props.innerPadding};
	right: 0;
	left: 0;
`

interface PanelContentProps {
	borderRadius: string
	visible: boolean
	animation: string
	backgroundColor: string
	transitionDuration: string
	innerPadding: string
	children: JSX.Element[] | JSX.Element
}

function PanelContent(props: PanelContentProps) {
	return (
		<Content
			borderRadius={props.borderRadius}
			visible={props.visible}
			animation={props.animation}
			backgroundColor={props.backgroundColor}
			transitionDuration={props.transitionDuration}>
			<Inner innerPadding={props.innerPadding}>{props.children}</Inner>
		</Content>
	)
}

export default PanelContent
