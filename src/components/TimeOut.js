import React from 'react';
import WinView from './WinView';


class TimeOut extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			redScreen: true
		};

	}
	
	componentDidMount() {
		setTimeout(() => { 
			this.setState( {redScreen: false}
			);
		}, 3000);
	}

	render() {

		if(this.state.redScreen){
		return (
			<div className="stage">
			<div className="bigCountdown">
				<h3>TIME OUT</h3>
			</div>
			</div>
			);
		} else {
			return(
				
				
					<WinView 
						word={this.props.word}
					/>
				
				
				
				);
		}
	}
}

export default TimeOut;
