import React, { Component } from 'react';
import './App.less'
import 'antd/dist/antd.css'

import WRouter from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
          <WRouter></WRouter>
      </div>
    );
  }
}

export default App;
