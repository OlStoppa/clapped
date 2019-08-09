import React from "react";
import BigCountdown from "./BigCountdown";
import SmallCountdown from "./SmallCountdown";
import TimeOut from "./TimeOut";
import WinView from "./WinView";
import ScrambledWord from "./ScrambledWord";

class StartGame extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBigCountdown = this.handleBigCountdown.bind(this);
    this.handleSmallCountdown = this.handleSmallCountdown.bind(this);
    this.handleWin = this.handleWin.bind(this);
    
    this.state = {
      bigCount: 3,
      smallCount: 10,
      win: false,
      shuffled: []
      
    };
  }
  handleChange(arr) {
    if (arr.length === 1) {
      const data = [...this.props.location.state.data];
      let mixed = this.shuffle(data);
      this.setState({ shuffled: [...mixed]});
    } else {
      arr.shift();
      this.setState({ shuffled: arr });
    }
  }
  handleWin() {
    this.setState(() => ({ win: true }));
  }

  handleBigCountdown() {
    this.setState(prevState => {
      return { bigCount: prevState.bigCount - 1 };
    });
  }

  handleSmallCountdown() {
    this.setState(prevState => {
      return { smallCount: prevState.smallCount - 1 };
    });
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  componentDidMount() {
    let name = this.props.location.state.name;
    if (
      localStorage.getItem(name) == null ||
      JSON.parse(localStorage.getItem(name)).length < 1
    ) {
      const data = [...this.props.location.state.data];
      let shuffled = this.shuffle(data);
      this.setState({ shuffled });
    } else {
      let shuffled = JSON.parse(localStorage.getItem(name));
      this.setState({ shuffled });
    }
  }



  componentWillUnmount() {
    let shuffle = this.state.shuffled;
    shuffle.shift();
    localStorage.setItem(
      this.props.location.state.name,
      JSON.stringify(shuffle)
    );
  }

  render() {
    
    const { shuffled } = this.state;
    
    switch (this.props.location.state.game) {
      case "generator":
        return (
          <div onClick={() => this.handleChange(shuffled)} className="stage">
            <span>{shuffled[0]}</span>
          </div>
        );
      default:
        if (this.state.bigCount > 0) {
          return (
            <BigCountdown
              bigCountdown={this.state.bigCount}
              handleBigCountdown={this.handleBigCountdown}
            />
          );
        } else {
          if (this.state.win) {
            return (
              
                <WinView 
                  word={shuffled[0]} 
                  time={60 - this.state.smallCount} 
                  unscramble={this.props.location.state.game === "scramble" ? shuffled[0] : false}
                  />
              
            );
          } else if (this.state.smallCount === 0) {
            return <TimeOut word={shuffled[0]} />;
          } else {
            return (
              <div onClick={this.handleWin} className="stage">
                <SmallCountdown
                  smallCountdown={this.state.smallCount}
                  handleSmallCountdown={this.handleSmallCountdown}
                />
                {
                  this.props.location.state.game === "scramble" ?
                  <ScrambledWord
                    word={shuffled[0]}
                  />
                  :
                  <span>{ shuffled[0]}</span>
                }
                
              </div>
            );
          }
        }
    }
  }
}

export default StartGame;
