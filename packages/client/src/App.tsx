import * as React from 'react';
import './App.css';
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { MySharedComponent } from "markd-shared";

const logo = require('./logo.svg');

@observer
class App extends React.Component {

  @observable count = 0;

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <div>
            <button onClick={this.handleClick}>Click Me ({this.count})</button>
          </div>
          <MySharedComponent count={this.count} />
        </p>
      </div>
    );
  }

  @action handleClick = () => this.count++;
}

export default App;