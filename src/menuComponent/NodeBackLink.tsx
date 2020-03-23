import React from "react"
import styled from 'styled-components';

type BackLinkTypes = {
	textColor: string
}

const BackLink = styled.a<BackLinkTypes> `
	display: block;
	color: ${props => props.textColor};
	text-decoration: none;
	font-size: 14px;
	padding: 15px 20px;
	line-height: 20px;
	outline: none;
	position: relative;
	cursor: pointer;
	padding-left: 35px;
	background: rgba(220,221,215,1);
	&:after {
		position: absolute;
		top: 0;
		line-height: 50px;
		font-family: "Font Awesome 5 Free";
		font-weight: 400;
		content: "\f04b";
		font-size: 12px;
		speak: none;
		left: 15px;
		color: rgba(104,104,104,0.5);
		transform: rotate(180deg);
	}
	&:hover {
		background: rgba(220,221,215,0.5);
		color: ${props => props.textColor};
	}
	&:not([href]):hover {
		background: rgba(220,221,215,0.5);
		color: ${props => props.textColor};
	}
	&:not([href]) {
		color: ${props => props.textColor};
	}
`;

const Node = styled.li `

`;

interface IProps {
	textColor: string,
	backButtonText: string,
	handleClick: () => void
}


function NodeBackLink(props: IProps) {
	return (
		<Node>
			<BackLink textColor={props.textColor} onClick={props.handleClick}>{props.backButtonText}</BackLink>
		</Node>
		)
}

export default NodeBackLink
