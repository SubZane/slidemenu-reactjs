import React from 'react'
import ReactDOM from 'react-dom'
import Slidemenu from './components/App'
import menudataJSON from './menudata.json'

ReactDOM.render(
	<React.Fragment>
		<Slidemenu menuDataSource={menudataJSON.treemenu} backButtonText={'Go back'} />
	</React.Fragment>,
	document.getElementById('root')
)
