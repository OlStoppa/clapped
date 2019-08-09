import React from 'react';

class BigCountdown extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		 this.bigCountdownInterval = setInterval(this.props.handleBigCountdown, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.bigCountdownInterval);
	}
	render(){
		return(
			<div className="stage">
			<div className="bigCountdown"><h3>{this.props.bigCountdown}</h3></div>
			</div>
			);
	}
}

export default BigCountdown;	