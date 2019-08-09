import React from 'react';


class SmallCountdown extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.smallCountdownInterval = setInterval(this.props.handleSmallCountdown, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.smallCountdownInterval);
	}
	render(){
		return(
			<div className="smallCountdown--container">
				<span>{ this.props.smallCountdown }</span>
			</div>
			);
	};
}

export default SmallCountdown;