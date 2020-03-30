import React from 'react'
import { styled } from './theme'
import NodeItem from './NodeItem'
import NodeBackLink from './NodeBackLink'

const SlideLeftOut = {
	animationName: {
		'0%': {
			transform: 'translateX(0)',
			opacity: 1
		},
		'100%': {
			transform: 'translateX(-100%)',
			opacity: 0
		}
	}
}

const SlideRightIn = {
	animationName: {
		'0%': {
			transform: 'translateX(-100%)',
			opacity: 0
		},
		'100%': {
			transform: 'translateX(0)',
			opacity: 1
		}
	}
}

const SlideLeftIn = {
	animationName: {
		'0%': {
			transform: 'translateX(100%)',
			opacity: 0
		},
		'100%': {
			transform: 'translateX(0)',
			opacity: 1
		}
	}
}

const SlideRightOut = {
	animationName: {
		'0%': {
			transform: 'translateX(0)',
			opacity: 1
		},
		'100%': {
			transform: 'translateX(100%)',
			opacity: 0
		}
	}
}

const Node = styled.ul({
	position: 'absolute',
	width: '100%',
	listStyle: 'none',
	font: {
		family: 'Arial, Helvetica, sans-serif'
	},
	backfaceVisibility: 'hidden',
	margin: {
		xy: 0
	},
	padding: {
		xy: 0
	},
	background: {
		color: '#EAE9E3'
	}
})

const AnimationEffects = {
	animationFillMode: 'forwards',
	animationDuration: '0.5s',
	animationTimingFunction: 'ease-in-out'
}

const Hide = {
	opacity: '0',
	display: 'none'
}

function setStyle(fade: 'in-left' | 'in-right' | 'out-left' | 'out-right' | '', visible: boolean) {
	console.log('fade: ' + fade + ' | visible: ', visible)
	if (fade === 'in-left') {
		const css = { ...SlideLeftIn, ...AnimationEffects }
		if (visible) {
			return css
		} else {
			return { ...css, ...Hide }
		}
	} else if (fade === 'in-right') {
		const css = { ...SlideRightIn, ...AnimationEffects }
		if (visible) {
			return css
		} else {
			return { ...css, ...Hide }
		}
	} else if (fade === 'out-left') {
		const css = { ...SlideLeftOut, ...AnimationEffects }
		if (visible) {
			return css
		} else {
			return { ...css, ...Hide }
		}
	} else if (fade === 'out-right') {
		const css = { ...SlideRightOut, ...AnimationEffects }
		if (visible) {
			return css
		} else {
			return { ...css, ...Hide }
		}
	} else {
		return {}
	}
}

interface NodeProps {
	visible: boolean
	fade: 'in-left' | 'in-right' | 'out-left' | 'out-right' | ''
	backButtonText: string
	onAnimationEnd: () => void
	backLinkClickHandler: () => void
	menuClickHandler: (id: number, title: string) => void
	backLink: boolean
	menuData: Array<any>
}

function NodeElement(props: NodeProps) {
	return (
		<Node css={setStyle(props.fade, props.visible)} onAnimationEnd={props.onAnimationEnd}>
			{props.backLink && (
				<NodeBackLink backButtonText={props.backButtonText} handleClick={props.backLinkClickHandler} />
			)}
			{props.menuData.map(data => (
				<NodeItem
					key={data.id}
					id={data.id}
					hasChildren={data.hasOwnProperty('subnodes') ? true : false}
					url={data.hasOwnProperty('subnodes') ? '#' : data.url}
					title={data.Title}
					handleClick={props.menuClickHandler}
				/>
			))}
		</Node>
	)
}

export default NodeElement
