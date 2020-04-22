import React, { useState, useEffect } from 'react'
import { styled, theme } from './theme'
import { findNode } from '../helpers/helpers'
import { treemenuObjectType, fadeType, ParentNode, conditionType } from '../helpers/types'
import Node from './Node'
import Breadcrumbs from './Breadcrumbs'

const MenuWrapper = styled.div({
	position: 'relative',
	background: {
		color: theme.backgroundColor,
	},
})

interface iProps {
	menuDataSource: treemenuObjectType[]
	backButtonText: string
}

function Slidemenu(props: iProps) {
	const [isEvenNodeVisible, setEvenNodeVisible] = useState<boolean>(true)
	const [isOddNodeVisible, setOddNodeVisible] = useState<boolean>(false)
	const [showEvenBackLink, setShowEvenBackLink] = useState<boolean>(false)
	const [showOddBackLink, setShowOddBackLink] = useState<boolean>(false)

	const [menuData, loadMenuData] = useState<treemenuObjectType[] | []>([])
	const [evenMenuData, setEvenMenuData] = useState<treemenuObjectType[] | []>([])
	const [oddMenuData, setOddMenuData] = useState<treemenuObjectType[] | []>([])

	const [nodeLevel, setNodeLevel] = useState<number>(0)
	const [parentKeys, setParentKeys] = useState<Array<ParentNode>>([])
	const [condition, setCondition] = useState<conditionType>('')

	const [oddFade, setOddFade] = useState<fadeType>('')
	const [evenFade, setEvenFade] = useState<fadeType>('')
	const [breadcrumbs, setBreadcrumbs] = useState<Array<ParentNode>>([])

	useEffect(() => {
		loadMenuData(props.menuDataSource)
		setEvenMenuData(props.menuDataSource)
	}, [props.menuDataSource])

	function resetFadeStates() {
		setOddFade('')
		setEvenFade('')
	}

	useEffect(() => {
		if (condition === 'open') {
			if (nodeLevel % 2 === 0) {
				setEvenNodeVisible(true)
				setEvenFade('in-left')

				setOddFade('out-left')
			} else {
				setOddNodeVisible(true)
				setOddFade('in-left')

				setEvenFade('out-left')
			}
		} else if (condition === 'close') {
			if (nodeLevel % 2 === 0) {
				setEvenNodeVisible(true)
				setEvenFade('in-right')

				setOddFade('out-right')
			} else {
				setOddNodeVisible(true)
				setOddFade('in-right')

				setEvenFade('out-right')
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

	function prepareParentMenuItem(parent: ParentNode): treemenuObjectType {
		const parentMenuItem: treemenuObjectType = {
			href: parent.href,
			text: parent.text,
			iteration: parent.iteration,
			id: parent.id,
			linkId: parent.linkId,
			isRootCategoryPage: parent.isRootCategoryPage,
			active: parent.active,
			subLinks: [],
		}
		return parentMenuItem
	}

	function setMenuData(parentMenuItem: treemenuObjectType, id: number) {
		if (nodeLevel % 2 === 0) {
			const obj = evenMenuData.filter((p) => p.id === id)
			if (obj.length > 0) {
				const firstItem = obj.shift()
				if (firstItem !== undefined) {
					const dupe = firstItem.subLinks.filter((p) => p.id === parentMenuItem.id)
					if (dupe.length <= 0) {
						firstItem.subLinks.unshift(parentMenuItem)
					}
					setOddMenuData(firstItem.subLinks)
				}
			}
		} else {
			const obj = oddMenuData.filter((p) => p.id === id)
			if (obj.length > 0) {
				const firstItem = obj.shift()
				if (firstItem !== undefined) {
					const dupe = firstItem.subLinks.filter((p) => p.id === parentMenuItem.id)
					if (dupe.length <= 0) {
						firstItem.subLinks.unshift(parentMenuItem)
					}
					setEvenMenuData(firstItem.subLinks)
				}
			}
		}
	}

	function OpenNode(id: number, parent: ParentNode) {
		setCondition('open')
		setNodeLevel(nodeLevel + 1)
		parent.nodeLevel = nodeLevel + 1
		setParentKeys((prevArray) => [...prevArray, parent])
		const parentMenuItem: treemenuObjectType = prepareParentMenuItem(parent)
		setMenuData(parentMenuItem, id)
	}

	useEffect(() => {
		setBreadcrumbs(parentKeys)
	}, [parentKeys])

	function CloseNode() {
		setCondition('close')
		setNodeLevel(nodeLevel - 1)

		setParentKeys((prevKeys) => prevKeys.splice(0, prevKeys.length - 1))

		if (parentKeys.length > 1) {
			const parentNode = parentKeys[parentKeys.length - 2]
			const obj = findNode(menuData, parentNode.id)
			if (obj !== null) {
				const menuitems = obj[0].subLinks
				if (nodeLevel % 2 === 0) {
					setOddMenuData(menuitems)
				} else {
					setEvenMenuData(menuitems)
				}
			}
		} else {
			if (nodeLevel % 2 === 0) {
				setOddMenuData(menuData)
			} else {
				setEvenMenuData(menuData)
			}
		}
	}

	function onNodeAnimationEnded() {
		resetFadeStates()

		if (nodeLevel % 2 === 0) {
			setOddNodeVisible(false)
			setShowOddBackLink(false)
		} else {
			setEvenNodeVisible(false)
			setShowEvenBackLink(false)
		}
	}

	return (
		<React.Fragment>
			<MenuWrapper>
				<Breadcrumbs breadcrumbs={breadcrumbs} />

				<Node
					visible={isEvenNodeVisible}
					fade={evenFade}
					onAnimationEnd={onNodeAnimationEnded}
					menuData={evenMenuData}
					menuClickHandler={OpenNode}
					backLink={showEvenBackLink}
					backLinkClickHandler={CloseNode}
					backButtonText={props.backButtonText}
				/>

				<Node
					visible={isOddNodeVisible}
					fade={oddFade}
					onAnimationEnd={onNodeAnimationEnded}
					menuData={oddMenuData}
					menuClickHandler={OpenNode}
					backLink={showOddBackLink}
					backLinkClickHandler={CloseNode}
					backButtonText={props.backButtonText}
				/>
			</MenuWrapper>
		</React.Fragment>
	)
}

export default Slidemenu
