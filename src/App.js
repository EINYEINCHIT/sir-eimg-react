import React from "react";

class App extends React.Component {
 

  render() {
    let parent = 200;
    let height = 150;
    const styles = {
      toolbar: {
        marginBottom: 20,
        border: '1px solid red',
      },
      dark: {
        background: 'purple',
        color: 'white',
      }
    };
    return (
      <div>
        <div style={{ marginBottom: parent - height,
        border: '1px solid red' }}>
          <h1>Hello, React!</h1>
        </div>
        <div style={{...styles.toolbar, ...styles.dark}}>
          Hello, React2!
        </div>
      </div>
    );
  }
}

export default App;
