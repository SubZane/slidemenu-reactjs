import React from 'react'
import styled, {keyframes} from 'styled-components';
import BreadcrumbNode from './BreadcrumbNode'

const Node = styled.ul `
	background-color: rgba(255,255,255,0.5);
	padding-left: 36px;
	padding-top: 25px;
	pointer-events: none;
	display: block;
	margin-bottom: 0;
	list-style: none;
	padding-bottom: 20px;
`;

function Breadcrumbs(props) {

	if (props.breadcrumbs.length > 0) {
		return (
			<Node>
			{props.breadcrumbs.map(data => (
				<BreadcrumbNode key={data.id} data={data} textColor={props.textColor} />
			))}
			</Node>
		)
	} else {
		return null
	}
}

export default Breadcrumbs
