import React from 'react';
import {Link} from 'react-router-dom';

const MainLinks = () => (
	<div className="container">
		<Link to="/start/timeout" className="main-link main-link--timeout">Timout</Link>
		<Link to="/start/scramble" className="main-link main-link--scramble">Scramble</Link>
		<Link to="/start/generator" className="main-link main-link--generator">Generator</Link>
	</div>
	);

export default MainLinks;