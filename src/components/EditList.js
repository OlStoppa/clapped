import React from 'react';


class EditList extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.selectWord = this.selectWord.bind(this);
        this.handleRemoveWord = this.handleRemoveWord.bind(this);

        this.state = {

            data: this.props.data,
            value: "",
            selected: ""
        }
    }

    onChange(e){
        this.setState({value: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const list = [...this.state.data];
        list.push(this.state.value);
        this.setState({data: list, value: ''});

    }
    selectWord(key) {
        this.setState({selected: key});
    }
    handleRemoveWord() {
        const selected = this.state.selected;
        const data = [...this.state.data];
        const newData = data.filter(word => word !== selected );
        this.setState({data: newData});

    }
    componentWillUnmount() {
        let completeData = JSON.parse(localStorage.getItem('data'));
        completeData[this.props.index].items = this.state.data;
        localStorage.setItem('data', JSON.stringify(completeData));
        this.props.set(completeData);
        this.props.toggle();
    }



    render() {
        return (
            <div className="container__edit">
                <div className="header__edit">
                    <button onClick={this.props.back}>Back</button>
                    {this.props.title}
                    <span onClick={this.handleRemoveWord}>Remove</span>
                </div>
                <div className="form__edit">
                    <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.value}/>
                    <button>ADD</button>
                    </form>
                </div>
                <ul>
                    {this.state.data.map((word, index) => (
                    <li 
                    className={word == this.state.selected ? "oliver": ""}
                    key={index} 
                    onClick={() => this.selectWord(word)}
                    >{word}
                    
                    </li>))}
                </ul>
            </div>
        );
    }
}

export default EditList;