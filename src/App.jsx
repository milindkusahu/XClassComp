import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <span>Count: {this.state.count}</span>
        <br />
        <br />
        <div>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
