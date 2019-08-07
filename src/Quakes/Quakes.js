import React from 'react';

const Quakes = (props) => {
	console.log(props, 'props');
	const quakeList = props.quakes.map((quake, i) => {
	return (<p key={i}>
		{quake.properties.title}
	</p>)
})
	return (
		<div id="info">
			{quakeList}
		</div>
		)
}

export default Quakes;