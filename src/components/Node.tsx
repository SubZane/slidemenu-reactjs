import React from 'react'
import { styled } from './theme'
import NodeItem from './NodeItem'
import NodeBackLink from './NodeBackLink'
import { treemenuObjectType } from '../helpers/types'

const SlideLeftOut = {
	animationName: {
		'0%': {
			transform: 'translateX(0)',
			opacity: 1,
		},
		'100%': {
			transform: 'translateX(-100%)',
			opacity: 0,
		},
	},
}

const SlideRightIn = {
	animationName: {
		'0%': {
			transform: 'translateX(-100%)',
			opacity: 0,
		},
		'100%': {
			transform: 'translateX(0)',
			opacity: 1,
		},
	},
}

const SlideLeftIn = {
	animationName: {
		'0%': {
			transform: 'translateX(100%)',
			opacity: 0,
		},
		'100%': {
			transform: 'translateX(0)',
			opacity: 1,
		},
	},
}

const SlideRightOut = {
	animationName: {
		'0%': {
			transform: 'translateX(0)',
			opacity: 1,
		},
		'100%': {
			transform: 'translateX(100%)',
			opacity: 0,
		},
	},
}

const Node = styled.ul({
	position: 'absolute',
	width: '100%',
	listStyle: 'none',
	font: {
		family: 'Arial, Helvetica, sans-serif',
	},
	backfaceVisibility: 'hidden',
	margin: {
		xy: 0,
	},
	padding: {
		xy: 0,
	},
	background: {
		color: '#EAE9E3',
	},
})

const AnimationEffects = {
	animationFillMode: 'forwards',
	animationDuration: '0.5s',
	animationTimingFunction: 'ease-in-out',
}

const Hide = {
	opacity: '0',
	display: 'none',
}

function getFadeAnimationStyles(fade: 'in-left' | 'in-right' | 'out-left' | 'out-right' | '') {
	if (fade === 'in-left') {
		return { ...SlideLeftIn, ...AnimationEffects }
	} else if (fade === 'in-right') {
		return { ...SlideRightIn, ...AnimationEffects }
	} else if (fade === 'out-left') {
		return { ...SlideLeftOut, ...AnimationEffects }
	} else if (fade === 'out-right') {
		return { ...SlideRightOut, ...AnimationEffects }
	} else {
		return {}
	}
}

function setStyle(fade: 'in-left' | 'in-right' | 'out-left' | 'out-right' | '', visible: boolean) {
	const css = getFadeAnimationStyles(fade)

	if (visible) {
		return css
	} else {
		return { ...css, ...Hide }
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
	menuData: treemenuObjectType[]
}

function NodeElement(props: NodeProps) {
	return (
		<Node css={setStyle(props.fade, props.visible)} onAnimationEnd={props.onAnimationEnd}>
			{props.backLink && (
				<NodeBackLink backButtonText={props.backButtonText} handleClick={props.backLinkClickHandler} />
			)}
			{props.menuData.map((data) => (
				<NodeItem
					key={data.id}
					id={data.id}
					hasChildren={data.subLinks.length > 0 ? true : false}
					url={data.subLinks.length > 0 ? '#' : data.href}
					title={data.text}
					handleClick={props.menuClickHandler}
				/>
			))}
		</Node>
	)
}

export default NodeElement
