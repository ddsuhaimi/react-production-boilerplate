import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: 0 };
  }

  addFun() {
    this.setState({ change: this.state.change + 1 });
  }
  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <button onClick={() => this.addFun()}>Click Here!</button>
        <div>{this.state.change}</div>
        <div>hasdfasdsf</div>
      </div>
    );
  }
}

export default Test;
