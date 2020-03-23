import React from 'react'
import styled, { css } from 'styled-components'

type PanelButtonType = {
	backgroundColor: string
	position: string
	buttonColor: string
}

const PanelButton = styled.div<PanelButtonType>`
	position: fixed;
	width: 50px;
	background-color: ${props => props.backgroundColor || 'coral'};
	color: white;
	font-weight: bold;
	border-radius: 50px;
	height: 50px;
	border: none;
	&:focus {outline:0;}
	z-index: 50;
	cursor: pointer;
	${props =>
		props.position === 'center' &&
		css`
			bottom: 20px;
			left: 50%;
			margin-left: -25px;
		`}
	${props =>
		props.position === 'left' &&
		css`
			bottom: 20px;
			left: 20px;
		`}
	${props =>
		props.position === 'right' &&
		css`
			bottom: 20px;
			right: 20px;
		`}
	&:after {
		right: 16px;
    color: ${props => props.buttonColor || '#fff'};
    position: absolute;
    top: 1px;
    line-height: 50px;
    font-family: "Font Awesome 5 Free";
    font-weight: 400;
    content: "\f0c9";
    font-size: 20px;
    speak: none;
	}
`

interface PanelContentProps {
	buttonBackgroundColor: string
	position: string
	buttonColor: string
	handleEvent: () => void
}

function PanelButtonContainer(props: PanelContentProps) {
	return (
		<PanelButton
			backgroundColor={props.buttonBackgroundColor}
			buttonColor={props.buttonColor}
			position={props.position}
			onClick={props.handleEvent}
		></PanelButton>
	)
}

export default PanelButtonContainer
