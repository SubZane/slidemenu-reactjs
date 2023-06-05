import React, { useEffect, useState } from 'react'

import Overlay from './Overlay'
import Panel from './Panel'
import PanelButton from './PanelButton'
import { createGlobalStyle, css } from './theme'
import { animationTypes, fadeTypes, stateTypes } from './types'

const GlobalStyle = createGlobalStyle<{ visible: boolean }>`
body {
	${(props) =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}

html {
	${(props) =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}
`

interface iProps {
	animation: animationTypes
	children?: JSX.Element[] | JSX.Element
	showButton: boolean
	state: stateTypes
}

function OffCanvasPanel(props: iProps) {
	const [togglePanel, setTogglePanel] = useState<boolean>(false)
	const [isPanelVisible, setPanelVisible] = useState<boolean>(false)
	const [hasOverlayAnimationEnded, sethasOverlayAnimationEnded] = useState<boolean>(false)
	const [hasPanelTransitionEnded, sethasPanelTransitionEnded] = useState<boolean>(false)
	const [fade, setFade] = useState<fadeTypes>('')

	useEffect(() => {
		if (props.state === 'open') {
			openPanel()
		} else if (props.state === 'close') {
			closePanel()
		}
	}, [props.state])

	useEffect(() => {
		if (togglePanel) {
			setPanelVisible(true)
			setFade('in')
			if (hasOverlayAnimationEnded && hasPanelTransitionEnded) {
				sethasOverlayAnimationEnded(false)
				sethasPanelTransitionEnded(false)
			}
		} else {
			if (isPanelVisible) {
				setPanelVisible(false)
				setFade('out')
			}
			if (hasOverlayAnimationEnded && fade === 'out') {
				setFade('')
			}
		}
	}, [hasOverlayAnimationEnded, hasPanelTransitionEnded, togglePanel, isPanelVisible, fade])

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

			<Overlay fade={fade} handleEvent={closePanel} onAnimationEnd={onOverlayAnimationEnd} />

			<Panel
				animation={props.animation}
				visible={isPanelVisible}
				onTransitionEnd={onPanelTransitionEnd}
				children={props.children}
			/>
			{props.showButton && <PanelButton handleEvent={openPanel}></PanelButton>}
		</React.Fragment>
	)
}

export default OffCanvasPanel
