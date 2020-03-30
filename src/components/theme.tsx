import * as styledComponents from 'styled-components'

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>

export interface IThemeInterface {
	backgroundColor: string
	borderRadius: string
	width: string
	transitionDuration: string
	color: string
}

export const theme = {
	backgroundColor: '#EAE9E3',
	borderRadius: '7px',
	transitionDuration: '0.5s',
	width: '100%',
	color: '#3D3B39'
}

export default styled
export { styled, css, createGlobalStyle, keyframes, ThemeProvider }
