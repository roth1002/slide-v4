const { Component } = React;

class Hello extends Component {
  render() {
    return <div>Hello</div>;
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
