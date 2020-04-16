export type treemenuObjectType_ = {
	id: number
	Title: string
	url: string
	subnodes?: treemenuObjectType_[]
}

export type Header = {
	links: treemenuObjectType[]
}

export type treemenuObjectType = {
	href: string
	text: string
	iteration: number
	id: number
	linkId: string
	subLinks: treemenuObjectType[]
	isRootCategoryPage: boolean
	active: boolean
}

export type parentKeysType = {
	id: number
	Title: string
	nodeLevel: number
}
