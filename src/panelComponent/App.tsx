import React, { useState, useEffect } from 'react'
import { css, createGlobalStyle } from 'styled-components'
import Overlay from './Overlay'
import PanelButton from './PanelButton'
import Panel from './Panel'

const GlobalStyle = createGlobalStyle<{ visible: boolean }>`
body {
	${props =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}

html {
	${props =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}
`

interface FlyPanelsProps {
	animation: string
	transitionDuration: string
	borderRadius: string
	customButtonReference: boolean
	innerPadding: string
	backgroundColor: string
	buttonPosition: string
	buttonBackgroundColor: string
	buttonColor: string
	children: JSX.Element[] | JSX.Element
}

function FlyPanels(props: FlyPanelsProps) {
	const [togglePanel, setTogglePanel] = useState<boolean>(false)
	const [isPanelVisible, setPanelVisible] = useState<boolean>(false)
	const [hasOverlayAnimationEnded, sethasOverlayAnimationEnded] = useState<
		boolean
	>(false)
	const [hasPanelTransitionEnded, sethasPanelTransitionEnded] = useState<
		boolean
	>(false)
	const [hideOverlay, setHideOverlay] = useState<boolean>(false)
	const [fadeout, setFadeout] = useState<boolean>(false)
	const [fadein, setFadein] = useState<boolean>(false)
	const [isPanelButtonVisible, setIsPanelButtonVisible] = useState<boolean>(
		true
	)

	useEffect(() => {
		if (props.customButtonReference) {
			//props.customButtonReference.current.addEventListener('click', openPanel)
			//setIsPanelButtonVisible(false)
		}
	}, [props.customButtonReference])

	useEffect(() => {
		if (togglePanel) {
			setHideOverlay(false)
			setPanelVisible(true)
			setFadein(true)
			if (hasOverlayAnimationEnded && hasPanelTransitionEnded) {
				sethasOverlayAnimationEnded(false)
				sethasPanelTransitionEnded(false)
			}
		} else {
			if (isPanelVisible) {
				setPanelVisible(false)
				setFadeout(true)
			}
			if (hasOverlayAnimationEnded && fadeout) {
				setHideOverlay(true)
				setFadeout(false)
				setFadein(false)
			}
		}
	}, [
		hasOverlayAnimationEnded,
		hasPanelTransitionEnded,
		togglePanel,
		isPanelVisible,
		fadeout
	])

	function closePanel() {
		setTogglePanel(false)
	}

	function openPanel() {
		setTogglePanel(true)
	}

	function onOverlayAnimationEnd() {
		sethasOverlayAnimationEnded(true)
	}

	function onPanelTransitionEnd() {
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
				innerPadding={props.innerPadding}
				borderRadius={props.borderRadius}
				animation={props.animation}
				visible={isPanelVisible}
				transitionDuration={props.transitionDuration}
				onTransitionEnd={onPanelTransitionEnd}
				children={props.children}
				backgroundColor={props.backgroundColor}
			/>
			{isPanelButtonVisible && (
				<PanelButton
					buttonBackgroundColor={props.buttonBackgroundColor}
					buttonColor={props.buttonColor}
					position={props.buttonPosition}
					handleEvent={openPanel}
				></PanelButton>
			)}
		</React.Fragment>
	)
}

export default FlyPanels
