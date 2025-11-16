import React from "react";

// *** 1st Way ***

// const MyContext = React.createContext();
// const App = props => {
//   return (
//     <MyContext.Provider name="Hello React">
//       <Header />
//     </MyContext.Provider>
//   )
// }

// const Header = () => {
//  return <Title />
// }

// const Title = () => {
//   return (
//     <MyContext.Consumer>
//       { name => <h1>{name}</h1> }
//     </MyContext.Consumer>
//   )
// }

// *** 2nd Way ***

// const MyContext = React.createContext("Hello React");

// const App = () => {
//   return <Header />;
// };
// const Header = () => {
//   return <Title />;
// };
// const Title = () => {
//   const name = React.useContext(MyContext);
//   return <h1>{name}</h1>;
// };

// *** 3rd Way ***

const MyContext = React.createContext("Hello React");

class App extends React.Component {
  render() {
    return <Header />;
  }
}
class Header extends React.Component {
  render() {
    return <Title />;
  }
}
class Title extends React.Component {
  static contextType = MyContext;

  render() {
    return <h1>{this.context}</h1>;
  }
}

export default App;
