import React from 'react';

const Header = (props) => (
	<div className="header">
		<h1>{props.title}</h1>
	</div>
	);

Header.defaultProps = {
	title: "clappED"
}

export default Header;