import React from "react";

class Title extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <Title name={this.props.name} />
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="App Title" />
        ...
      </div>
    );
  }
}

export default App;

