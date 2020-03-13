import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { findNode } from '../helpers/helpers'
import Node from './Node'
import Breadcrumbs from './Breadcrumbs'

const MenuWrapper = styled.div `
	background: ${props => props.backgroundColor || "#F5F3F3"};
	position: relative;
`;


function Slidemenu(props) {
	const [isEvenNodeVisible, setEvenNodeVisible] = useState(true)
	const [isOddNodeVisible, setOddNodeVisible] = useState(false)
	const [showEvenBackLink, setShowEvenBackLink] = useState(false)
	const [showOddBackLink, setShowOddBackLink] = useState(false)

	const [menuData, loadMenuData] = useState([]);
	const [evenMenuData, setEvenMenuData] = useState([])
	const [oddMenuData, setOddMenuData] = useState([])

	const [nodeLevel, setNodeLevel] = useState(0);
	const [parentKeys, setParentKeys] = useState([])
	const [condition, setCondition] = useState(null)

	const [oddFade, setOddFade] = useState(null);
	const [oddDirection, setOddDirection] = useState('left')

	const [evenFade, setEvenFade] = useState(null);
	const [evenDirection, setEvenDirection] = useState('left')

	const [breadcrumbs, setBreadcrumbs] = useState([])

	useEffect(() => {
		loadMenuData(props.menuDataSource)
		setEvenMenuData(props.menuDataSource)
	}, [props.menuDataSource]);

	function resetFadeStates() {
		setOddFade(null)
		setEvenFade(null)
	}

	useEffect(() => {
		// console.log('Level: ' + nodeLevel)
		// console.log('condition: ' + condition);
		// console.log('-----------------');
		if (condition === 'open') {
			if ( nodeLevel % 2 === 0) {
				setEvenNodeVisible(true)
				setEvenDirection('left')
				setEvenFade('in')

				setOddDirection('left')
				setOddFade('out')
			} else {
				setOddNodeVisible(true)
				setOddDirection('left')
				setOddFade('in')

				setEvenDirection('left')
				setEvenFade('out')
			}
		} else if (condition === 'close') {
			if ( nodeLevel % 2 === 0) {
				setEvenNodeVisible(true)
				setEvenDirection('right')
				setEvenFade('in')

				setOddDirection('right')
				setOddFade('out')
			} else {
				setOddNodeVisible(true)
				setOddDirection('right')
				setOddFade('in')

				setEvenDirection('right')
				setEvenFade('out')
			}
		}
	}, [nodeLevel, condition])

	useEffect(() => {
		if (nodeLevel > 0) {
			if (nodeLevel % 2 === 0) {
				setShowEvenBackLink(true)
			} else {
				setShowOddBackLink(true)
			}
		}
	}, [nodeLevel])

	function OpenNode(id, title) {
		setCondition('open')
		setNodeLevel(nodeLevel + 1)
		const parent = {
			"id": id,
			"Title": title,
			"nodeLevel": (nodeLevel + 1)
		}
		setParentKeys(prevArray => [...prevArray, parent])

		if ( nodeLevel % 2 === 0) {
			const obj = evenMenuData.filter(p => p.id === id)
				if (obj.length > 0) {
				setOddMenuData(obj.shift().subnodes)
			}
		} else {
			const obj = oddMenuData.filter(p => p.id === id)
				if (obj.length > 0) {
				setEvenMenuData(obj.shift().subnodes)
			}
		}

	}

	useEffect(() => {
		setBreadcrumbs(parentKeys)
	}, [parentKeys]);

	function CloseNode() {
		setCondition('close')
		setNodeLevel(nodeLevel -1)

		setParentKeys(prevKeys => prevKeys.splice(0, prevKeys.length - 1))


		if (parentKeys.length > 1) {
			const parentNode = parentKeys[parentKeys.length-2]
			const obj = findNode(menuData, parentNode.id)
			const menuitems = obj[0].subnodes

			if ( nodeLevel % 2 === 0) {
				setOddMenuData(menuitems)
			} else {
				setEvenMenuData(menuitems)
			}
		} else {
			if ( nodeLevel % 2 === 0) {
				setOddMenuData(menuData)
			} else {
				setEvenMenuData(menuData)
			}
		}
	}

	function onNodeAnimationEnded() {
		resetFadeStates()

		if ( nodeLevel % 2 === 0) {
			setOddNodeVisible(false)
			setShowOddBackLink(false)
		} else {
			setEvenNodeVisible(false)
			setShowEvenBackLink(false)
		}
	}

  return (
		<React.Fragment>
			<MenuWrapper backgroundColor={props.backgroundColor} menuWidth={props.width}>
				<Breadcrumbs textColor={props.textColor} breadcrumbs={breadcrumbs} />

				<Node
					visible={isEvenNodeVisible}
					fade={evenFade}
					direction={evenDirection}
					transitionDuration={props.transitionDuration}
					onAnimationEnd={onNodeAnimationEnded}
					menuData={evenMenuData}
					menuClickHandler={OpenNode}
					backLink={showEvenBackLink}
					backLinkClickHandler={CloseNode}
					backgroundColor={props.backgroundColor}
					textColor={props.textColor}
					backButtonText={props.backButtonText}
				/>

				<Node
					visible={isOddNodeVisible}
					fade={oddFade}
					direction={oddDirection}
					transitionDuration={props.transitionDuration}
					onAnimationEnd={null}
					menuData={oddMenuData}
					menuClickHandler={OpenNode}
					backLink={showOddBackLink}
					backLinkClickHandler={CloseNode}
					backgroundColor={props.backgroundColor}
					textColor={props.textColor}
					backButtonText={props.backButtonText}
				/>

			</MenuWrapper>
		</React.Fragment>
  );
}

export default Slidemenu

