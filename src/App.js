import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component{

  constructor(props){
    super(props)
    console.log('render');
  }

  state = {
    count : 0
  };

  add  = () => {
    this.setState(c => ({count: c.count + 1}));
  };

  min = () => {
    this.setState(c => ({count: c.count -1}));
  };

  componentDidMount(){
    console.log('mount');
  }

  componentDidUpdate(){
    console.log('update');
  }

  componentWillUnmount(){
    console.log('unmount');
  }

  render(){
    console.clear();
    console.log('render');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.min}>Min</button>
      </div>
    )
  }
}

export default App;
