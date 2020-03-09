import React, {} from 'react';
import ReactDOM from 'react-dom';
import FlyPanels from './FlyPanels';

const mybutton = React.createRef();

ReactDOM.render (
	<React.Fragment>
		<FlyPanels
			animation={"flip-bottom"}
			transitionDuration={"0.5s"}
			borderRadius={"7px"}
			customButtonReference={false}
		>
				<p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</p>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</p>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</p>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</p>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</p>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</p>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
		</FlyPanels>
		<button className="custombutton" ref={mybutton}>test</button>
		<div></div>
		</React.Fragment>
		,
	document.getElementById('root')
);
