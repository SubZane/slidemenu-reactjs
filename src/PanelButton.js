import React from 'react';
import styled from 'styled-components';

const PanelButton = styled.div`
	position: fixed;
	bottom: 30px;
	left: 50%;
	width: 50px;
	margin-left: -25px;
	background-color: coral;
	color: white;
	font-weight: bold;
	border-radius: 50px;
	height: 50px;
	border: none;
	&:focus {outline:0;}
	z-index: 50;
	cursor: pointer;
`

function PanelButtonContainer (props) {
	return (
		<PanelButton onClick={props.handleEvent}></PanelButton>
	)
}

export default PanelButtonContainer
