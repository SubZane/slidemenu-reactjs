import React, { useState, useEffect } from 'react';
import { css, createGlobalStyle } from 'styled-components';
import Overlay from './Overlay'
import PanelButton from './PanelButton'
import Panel from './Panel'

const GlobalStyle = createGlobalStyle`
body {
	${props => props.visible && css`
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: fixed;
	`}
}

html {
	${props => props.visible && css`
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: fixed;
	`}
}
`

FlyPanels.defaultProps = {
  animation: 'door-left',
	transitionDuration: '0.5s',
	borderRadius: '5px'
};

function FlyPanels(props) {
	const [togglePanel, setTogglePanel] = useState(false);
	const [isPanelVisible, setPanelVisible] = useState(false);
	const [hasOverlayAnimationEnded, sethasOverlayAnimationEnded] = useState(false);
	const [hasPanelTransitionEnded, sethasPanelTransitionEnded] = useState(false);
	const [hideOverlay, setHideOverlay] = useState(false);
	const [fadeout, setFadeout] = useState(false);
	const [fadein, setFadein] = useState(false);

	useEffect(() => {
	if (togglePanel) {
			setHideOverlay(false);
			setPanelVisible(true);
			setFadein(true);
			if (hasOverlayAnimationEnded && hasPanelTransitionEnded) {
				sethasOverlayAnimationEnded(false);
				sethasPanelTransitionEnded(false);
			}
		} else {
			if (isPanelVisible) {
				setPanelVisible(false);
				setFadeout(true);
			}
			if (hasOverlayAnimationEnded && fadeout) {
				setHideOverlay(true);
				setFadeout(false);
				setFadein(false);
			}
		}

	}, [hasOverlayAnimationEnded, hasPanelTransitionEnded, togglePanel, isPanelVisible, fadeout]);

  function closePanel () {
		setTogglePanel(false)
	}

	function openPanel () {
		setTogglePanel(true)
	}

	function onOverlayAnimationEnd () {
		sethasOverlayAnimationEnded(true)
	}

	function onPanelTransitionEnd () {
		sethasPanelTransitionEnded(true)
	}

  return (
	<React.Fragment>
		<GlobalStyle visible={isPanelVisible} />

		<Overlay
			transitionDuration={props.transitionDuration}
			fadein={fadein}
			fadeout={fadeout}
			hide={hideOverlay}
			handleEvent={closePanel}
			onAnimationEnd={onOverlayAnimationEnd}
		/>

		<Panel
			borderRadius={props.borderRadius}
			animation={props.animation}
			visible={isPanelVisible}
			transitionDuration={props.transitionDuration}
			onTransitionEnd={onPanelTransitionEnd}
			children={props.children}
		/>

		<PanelButton handleEvent={openPanel}></PanelButton>
	</React.Fragment>
  );
}

export default FlyPanels
