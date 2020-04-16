import { treemenuObjectType } from './types'

export function findNode(object: treemenuObjectType[], id: number): treemenuObjectType[] | null {
	const foundObj = object.filter((p) => p.id === id)
	if (foundObj.length > 0) {
		return { ...foundObj }
	} else {
		const oc = object.filter((p) => p.hasOwnProperty('subLinks'))
		if (oc && typeof oc === 'object' && oc !== null) {
			for (var i = 0; i < oc.length; i++) {
				const retObj = findNode(oc[i].subLinks, id)
				if (retObj != null) {
					return retObj
				}
			}
		}
	}
	return null
}

export function transformMenuObject(menu: treemenuObjectType[]): treemenuObjectType[] {
	const m = menu
	return m
}
