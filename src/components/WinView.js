import React from "react";
import ShuffleText from "react-shuffle-text";

class WinView extends React.Component {
  constructor(props) {
	super(props);

	this.contentConstructor = this.contentConstructor.bind(this);
	
	this.state = {
		unscramble: false
	}
  }

  componentDidMount(){
	  if(this.props.unscramble !== false){
		  this.setState({ unscramble: true });
	  }
  }

  contentConstructor() {
    if (this.state.unscramble === false) {
      return (
        <>
          <div>
            <h3>{this.props.word}</h3>
          </div>
          <div>
            <h3>{this.props.time && <span>{this.props.time}secs</span>}</h3>
          </div>
        </>
      );
    } else {
		return <ShuffleText content={this.props.unscramble}/>
	}
  }
  render() {
    return (
		<div className="stage">
			{this.contentConstructor()}
		</div>
		);
  }
}

export default WinView;
