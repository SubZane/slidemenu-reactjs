import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

import Slidemenu from './components/App'
import { slidemenuTheme, ThemeProvider } from './components/theme'
import menudataJSON from './menudata.json'
import OffCanvasPanel from './offcanvaspanel/PanelComponent/App'
import { theme as offcanvaspanelTheme } from './offcanvaspanel/PanelComponent/theme'
import { animationTypes } from './offcanvaspanel/PanelComponent/types'

const container = document.getElementById('root')
const root = createRoot(container!)

function TreeMenuContainer() {
	const [effect, setEffect] = useState<animationTypes>('door-left')
	const theme = { ...slidemenuTheme, ...offcanvaspanelTheme }

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<OffCanvasPanel state={''} showButton={true} animation={effect}>
					<Slidemenu menuDataSource={menudataJSON.treemenu} backButtonText={'Go back'} />
				</OffCanvasPanel>
				<div className="select">
					<select onChange={(e) => setEffect(e.currentTarget.value as animationTypes)}>
						<option value="door-left">Door Left</option>
						<option value="door-right">Door Right</option>
						<option value="flip-top">Flip Top</option>
						<option value="flip-bottom">Flip Bottom</option>
					</select>
				</div>
			</ThemeProvider>
		</React.Fragment>
	)
}

root.render(<TreeMenuContainer />)
