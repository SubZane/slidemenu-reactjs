import React from 'react'
import { styled } from './theme'
import BreadcrumbNode from './BreadcrumbNode'

const Node = styled.ul({
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
	display: 'block',
	listStyle: 'none',
	padding: {
		left: '36px',
		top: '25px',
		bottom: '20px'
	},
	pointerEvents: 'none',
	margin: {
		bottom: 0
	}
})

interface BreadCrumbProps {
	breadcrumbs: Array<any>
}

function Breadcrumbs(props: BreadCrumbProps) {
	if (props.breadcrumbs.length > 0) {
		return (
			<Node>
				{props.breadcrumbs.map(data => (
					<BreadcrumbNode key={data.id} id={data.id} title={data.Title} />
				))}
			</Node>
		)
	} else {
		return null
	}
}

export default Breadcrumbs
