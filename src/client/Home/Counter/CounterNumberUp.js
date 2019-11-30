import React, { Component } from "react";

class CounterNumberUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  countup = props => {
    const end = this.props.endValue;

    if (this.state.count < end) {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    } else {
      this.setState({
        count: end
      });
    }
  };

  render() {
    // eslint-disable-next-line
    const count = setInterval(this.countup, this.props.time);

    return <div> {this.state.count} +</div>;
  }
}

export default CounterNumberUp;
