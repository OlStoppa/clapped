import React from 'react';


class ScrambledWord extends React.Component  {
    constructor(props) {
        super(props);

        this.shuffleWord = this.shuffleWord.bind(this);
    }

    shouldComponentUpdate(nextProps){
        return nextProps.word !== this.props.word;
    }

    shuffleWord(word) {
        var shuffledWord = '';
        word = word.split('');
        while (word.length > 0) {
          shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
        }
        return shuffledWord;
    }
    render() {
    return (
        <span>{this.shuffleWord(this.props.word)}</span>
    );
    }
}

export default ScrambledWord;