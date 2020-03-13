import React from 'react';
import styled, {css} from 'styled-components';
import Content from './Content'

const Panel = styled.div`
	position: fixed;
  max-width: 700px;
	z-index: 2000;
	backface-visibility: hidden;
	visibility: hidden;

	/* animation props */
	${props => props.animation === 'door-left' && css`
  	top: 10px;
		right: 50px;
		left: 0px;
		bottom: 10px;
		perspective: 1300px;
	`}

	${props => props.animation === 'door-right' && css`
	  top: 10px;
		right: 0px;
		left: 50px;
		bottom: 10px;
		perspective: 1300px;
	`}

	${props => props.animation === 'flip-bottom' && css`
		top: 50px;
		right: 20px;
		left: 20px;
		bottom: 0;
		perspective: 1300px;
	`}

	${props => props.visible && css`
		visibility: visible;
		opacity: 1;
	`}

	@media (min-width: 768px) {
		${props => props.animation === 'door-left' && css`
			right: auto;
		`}
		${props => props.animation === 'door-right' && css`
			left: auto;
		`}
    width: 30%;
		border-radius: 0 5px;
		${props => props.animation === 'flip-bottom' && css`
	    width: 600px;
			left: 50%;
			margin-left: -300px; /* Half of the width */
		`}
	}
`

function PanelContainer (props) {
	return (
		<Panel
			borderRadius={props.borderRadius}
			animation={props.animation}
			visible={props.visible}
			onTransitionEnd={props.onTransitionEnd}>

			<Content
				innerPadding={props.innerPadding}
				borderRadius={props.borderRadius}
				visible={props.visible}
				animation={props.animation}
				children={props.children}
				transitionDuration={props.transitionDuration}
				backgroundColor={props.backgroundColor}
			/>

		</Panel>
	)
}

export default PanelContainer
