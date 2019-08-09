import React from "react";
import SideNav from "../components/SideNav";
import { dataList } from "../constants/data";
import StartBox from "../components/StartBox";

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    // this.setProgress = this.setProgress.bind(this);

    this.state = {
      data: [
        { name: "colors", items: dataList[0] },
        { name: "animals", items: dataList[1] }
      ],
      game: ""
    };
  }

  // setProgress(obj) {
  // 	this.setState((prevState)=>
  // 	 ({ progress: {
  // 		...prevState.progress,
  // 		...obj
  // 	}}), () => console.log(this.state.progress));
  // }

  componentDidMount() {
    const wordLists = JSON.parse(localStorage.getItem("data"));
    if (wordLists != null) {
      this.setState(prevState => ({ data: prevState.data.concat(wordLists) }));
    }
    if (this.props.location.pathname === "/start/generator") {
      this.setState({ game: "generator" });
    } else if (
      this.props.location.pathname === "/start/timeout" ) {
      this.setState({ game: "timeout" });
    } else {
      this.setState({game: "scramble"});
    }
  }

  render() {
    return (
      <div className="main">
        <SideNav />
        <div className="startBox__container">
          {this.state.data.map((key, index) => (
            <StartBox
              title={key.name}
              key={key.name}
              data={key.items} //pass data to start box
              game={this.state.game}
              progress={this.state.progess}
              setProgress={this.setProgress}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StartPage;
