import React, { Component } from 'react';
import DT from './utils/devtools';


class App extends Component {
  static path = '/';
  render() {
    return (
        <div>
            <h1>Привет</h1>
            {process.env.NODE_ENV !== 'prodaction' ? <DT/> : null }
        </div>
    );
  }
}

export default App;
