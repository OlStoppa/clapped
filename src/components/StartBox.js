import React from 'react';
import {Link} from 'react-router-dom';

class StartBox extends React.Component {

	constructor(props){
		super(props);
		
	}

	render(){
		
		return(
			
			<div className="startButton">
				<Link className="start__link-box" 
				to={{
					pathname:"/stage", 
					state:{
					 name: this.props.title,
					 data: this.props.data, 
					 game: this.props.game,
					
					 
					 }} }>
					<p>{this.props.title}</p>

				</Link>
			</div>
			
		);
	}	
}


export default StartBox;