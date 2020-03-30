import React from 'react'
import ReactDOM from 'react-dom'
import Slidemenu from './components/App'
import menudataJSON from './menudata.json'

import { GlitzClient } from '@glitz/core'
import { GlitzProvider } from '@glitz/react'
import transformers from '@glitz/transformers'

const glitz = new GlitzClient({ transformer: transformers() })

ReactDOM.render(
	<GlitzProvider glitz={glitz}>
		<Slidemenu menuDataSource={menudataJSON.treemenu} backButtonText={'Go back'} />
	</GlitzProvider>,
	document.getElementById('root')
)
