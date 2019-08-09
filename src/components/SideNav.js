import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = (props) => (
	<div className="nav__container">
	<div className="sidenav">
		<div className="nav-box"><Link className="link-box" to="/">Home</Link></div>
		<div className="nav-box"><Link className="link-box" to="/">Settings</Link></div>
		<div className="nav-box"><Link className="link-box" to="/">How to play</Link></div>
		<div className="nav-box"><Link className="link-box" to= "/custom">Custom</Link></div>
	</div>
	</div>
	);

export default SideNav;