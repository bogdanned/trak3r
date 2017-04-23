import React from 'react';
import Navbar from './Navbar.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
