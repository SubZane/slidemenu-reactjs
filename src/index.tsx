import React from 'react'
import ReactDOM from 'react-dom'
import Slidemenu from './components/App'
import menudataJSON from './menudata.json'
import { ThemeProvider, theme } from './components/theme'

ReactDOM.render(
	<React.Fragment>
		<ThemeProvider theme={theme}>
			<Slidemenu menuDataSource={menudataJSON.treemenu} backButtonText={'Go back'} />
		</ThemeProvider>
	</React.Fragment>,
	document.getElementById('root')
)
