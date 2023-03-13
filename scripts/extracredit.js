'use strict';

class ButtonCount extends React.Component {
  
  constructor(props) {

    super(props);

    this.counter = {
      count: 0
    };

    this.state = {
      value: `Times Clicked: ${this.counter.count}`
    };
  }

  render() {

    return React.createElement("button", {
      className: "button",
      onClick: () => this.setState({
        value: `Times Clicked: ${++this.counter.count}`
      })
    }, this.state.value);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(ButtonCount, null));
