import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score : props.score
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      score: nextProps.score
    });
  }

  render() {
    return(
      <div style = {{color:'white', fontSize:'2em', textAlign:'right', marginRight:'10px'}}>Score : {this.state.score}</div>
    );
  }
}

export default Score;